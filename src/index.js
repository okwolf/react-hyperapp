import React from "react"
import { app } from "hyperapp"

const convertReactNode = node => {
  if (typeof node !== "object") {
    return node
  }
  const { type: nodeName, props: { children, ...attributes } } = node
  if (typeof nodeName === "function") {
    const resolvedNode = nodeName(attributes, children)
    return convertReactNode(resolvedNode)
  }
  return {
    nodeName,
    attributes,
    children: Array.isArray(children)
      ? children.map(convertReactNode)
      : [children]
  }
}

export class Hyperapp extends React.Component {
  init(element) {
    if (!this.mounted && element) {
      this.mounted = true
      const {
        state,
        actions,
        children,
        init = Function.prototype,
        hoas = []
      } = this.props

      const view = (state, actions) => {
        const next = children(state, actions)
        return convertReactNode(next)
      }
      const composedHoas = hoas.reduce(
        (previousApp, hoa) => nextApp => hoa(previousApp(nextApp)),
        nextApp => nextApp
      )
      init(composedHoas(app)(state, actions, view, element))
    }
  }
  render() {
    return React.createElement("div", {
      ref: this.init.bind(this)
    })
  }
}
