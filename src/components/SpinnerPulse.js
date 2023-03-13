class SpinnerPulse extends HTMLElement {
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

      .container {
        width: 70%;
        aspect-ratio: 1/1;
        filter: drop-shadow(-5px -5px 5px white) drop-shadow(5px 5px 5px white);
        border-radius: 50%;
      }

      .spinner {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        animation: pulse 2s ease-in-out infinite alternate;
        background: radial-gradient(circle, rgba(245,137,8,1) 20%, rgba(242,238,29,1) 51%, rgba(255,255,255,1) 100%);
      }

      @keyframes pulse {
        from {scale: 0}
        to {scale: 1}
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
      <style>${SpinnerPulse.styles}</style>
      <div class="container">
        <div class="spinner"></div>
      </div>
      <span>Loading</span>
    `;
  }
}

customElements.define("spinner-pulse", SpinnerPulse);
