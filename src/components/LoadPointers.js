class LoadPointers extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        text-align: center;
      }

      .container{
        display:flex;
        gap: 10px;
        margin-top:20px;
      }

      .pointer {
        width: 15px;
        height: 15px;
        background-color: white;
        border-radius:50%;
      }


    `;
  }

  connectedCallback() {
    this.render();
    this.scale();
  }

  scale() {
    const pointers = this.shadowRoot.querySelectorAll(".pointer");

    const keyframes = [
      { transform: "translateY(0)" },
      { transform: "translateY(-20px)" }
    ];

    const options = {
      duration: 600,
      iterations: Infinity,
      direction: "alternate"
    };

    pointers[0].animate(keyframes, options);
    setTimeout(() => pointers[1].animate(keyframes, options), 200);
    setTimeout(() => pointers[2].animate(keyframes, options), 400);
    setTimeout(() => pointers[3].animate(keyframes, options), 600);
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
      <style>${LoadPointers.styles}</style>
      <div class="container">
        <div class="pointer"></div>
        <div class="pointer"></div>
        <div class="pointer"></div>
        <div class="pointer"></div>
      </div>
    `;
  }
}

customElements.define("load-pointers", LoadPointers);
