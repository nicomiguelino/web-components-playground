import './style.css'

class MyElement extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })

    shadow.innerHTML = `
      <div>
        <h3 part="text">
          <slot>Default Heading Text</slot>
        </h3>
      </div>
    `
  }
}

customElements.define("my-element", MyElement)
