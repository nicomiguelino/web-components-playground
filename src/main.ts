import './style.css'

class MyElement extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })

    shadow.innerHTML = `
      <style>
        h3 {
          color: var(--text-color, #000000);
        }
      </style>
      <div>
        <h3>
          <slot>Default Heading Text</slot>
        </h3>
      </div>
    `
  }
}

customElements.define("my-element", MyElement)
