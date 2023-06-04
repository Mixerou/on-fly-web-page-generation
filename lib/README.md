# On The Fly Web Page Generation Library

On The Fly Web Page Generation project library

## Usage (via `Vite`)

Install all dependencies

```shell
# Add library to the project
$ pnpm i ./lib/wasm

# Install additional dev dependencies
$ pnpm i -D vite-plugin-wasm vite-plugin-top-level-await
```

Edit config file

```js
import wasm from "vite-plugin-wasm"
import topLevelAwait from "vite-plugin-top-level-await"

export default defineConfig({
  plugins: [wasm(), topLevelAwait()],
})
```

Write some JS

```js
import { greet } from 'on-the-fly-web-page-generation-lib'

console.log(greet('World'))
```

## Development

```shell
# Test library
$ wasm-pack test --headless --chrome --firefox

# Build library
$ wasm-pack build --release --out-dir wasm; rm ./wasm/.gitignore
```

## License

This library is available under the MIT license.
See the [LICENSE](LICENSE) file for more info.
