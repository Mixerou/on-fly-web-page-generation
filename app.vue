<script setup lang="ts"></script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
* {
  margin: 0;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: 'Poppins', sans-serif;
}

body {
  display: flex;
  justify-content: center;
  @include dvw(width, 100);
  @include dvh(height, 100);
  overflow-x: hidden;
  scrollbar-width: none;
  background: var(--white);
  color: var(--black);
  transition: var(--default-transition);
  transition-property: background-color, color;

  &::-webkit-scrollbar {
    display: none;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--neutral-900);
  transition: var(--fast-transition-duration);
}

h1 {
  line-height: var(--4xl-line-height);
  font-size: var(--4xl-font-size);
}

h2 {
  line-height: var(--3xl-line-height);
  font-size: var(--3xl-font-size);
}

h3 {
  line-height: var(--2xl-line-height);
  font-size: var(--2xl-font-size);
}

h4 {
  line-height: var(--xl-line-height);
  font-size: var(--xl-font-size);
}

h5 {
  line-height: var(--large-line-height);
  font-size: var(--large-font-size);
}

h6 {
  line-height: var(--medium-line-height);
  font-size: var(--medium-font-size);
}
</style>
