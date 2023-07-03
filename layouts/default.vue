<script setup lang="ts">
import { convertPugToJson } from 'on-the-fly-web-page-generation-lib'
import homePageData from 'assets/default-pages/index.pug?raw'

const route = useRoute()
const pageData = ref({ children: [] })
const isAppInitialized = ref(false)

let db: IDBDatabase

watchEffect(async () => {
  if (!isAppInitialized.value) {
    return
  }

  const transaction = db.transaction('pages', 'readwrite').objectStore('pages')

  let request: IDBRequest<any>
  let data

  switch (route.path) {
    case '/':
      request = transaction.get('/')
      await new Promise((resolve, reject) => {
        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(new Error('DB request error'))
      })
      data = request.result?.data

      if (data === undefined) {
        data = homePageData
      }

      break
    default:
      request = transaction.get(route.path)
      await new Promise((resolve, reject) => {
        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(new Error('DB request error'))
      })
      data = request.result?.data

      if (data === undefined) {
        throw showError({ statusCode: 404, statusMessage: 'Page not found' })
      }
  }

  try {
    pageData.value = JSON.parse(convertPugToJson(data))
  } catch (_) {
    throw showError({
      statusCode: 400,
      statusMessage: 'Failed to parse pug file',
    })
  }

  let title = ''

  try {
    title = (
      (
        pageData.value.children.find(
          (fragment: any) => fragment.name === 'schema'
        ) as any
      )?.children.find((fragment: any) => fragment.name === 'title') as any
    )?.children[0]
  } catch (_) {}

  useHead({
    title,
  })
})

onMounted(() => {
  if (!('indexedDB' in window)) {
    throw showError({
      statusCode: 400,
      statusMessage: "This browser doesn't support IndexedDB",
    })
  }

  const dbRequest = indexedDB.open('on-the-fly-web-page-generation', 1)

  dbRequest.onerror = event => {
    /* eslint-disable no-console */
    console.error(event)
    /* eslint-enable no-console */

    throw showError({
      statusCode: 400,
      statusMessage: 'Failed to open Indexed DB',
    })
  }

  dbRequest.onupgradeneeded = function () {
    const db = dbRequest.result

    if (!db.objectStoreNames.contains('pages')) {
      db.createObjectStore('pages', { keyPath: 'path' })
    }
  }

  dbRequest.onsuccess = function () {
    db = dbRequest.result

    isAppInitialized.value = true
  }
})
</script>

<template>
  <div id="default-layout">
    <main>
      <PageBuilder
        :fragments="(pageData.children.find((fragment: any) => fragment.name === 'template') as any)?.children || []"
      />
    </main>
  </div>
</template>

<style lang="scss" scoped>
#default-layout {
  width: 100%;
  height: 100%;

  main {
    width: 100%;
    height: 100%;
  }
}
</style>
