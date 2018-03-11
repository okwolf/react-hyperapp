# [React](https://reactjs.org) [Hyperapp](https://github.com/hyperapp/hyperapp)

[![npm](https://img.shields.io/npm/v/react-hyperapp.svg)](https://www.npmjs.org/package/react-hyperapp)

Here is an example counter that can be incremented or decremented. Go ahead and [try it online](https://codepen.io/okwolf/pen/rdVBXV?editors=0010).

```js
import React from "react"
import ReactDOM from "react-dom"
import { Hyperapp } from "react-hyperapp"

ReactDOM.render(
  <Hyperapp
    state={{ count: 0 }}
    actions={{
      down: () => state => ({ count: state.count - 1 }),
      up: () => state => ({ count: state.count + 1 })
    }}
  >
    {(state, actions) => (
      <main>
        <h1>{state.count}</h1>
        <button onclick={actions.down}>-</button>
        <button onclick={actions.up}>+</button>
      </main>
    )}
  </Hyperapp>,
  document.body
)
```

## License

React Hyperapp is MIT licensed. See [LICENSE](LICENSE.md).
