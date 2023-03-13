(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>${o.styles}</style>
      <div class="container">
        <div class="spinner"></div>
      </div>
      <span>Loading</span>
    `}}customElements.define("spinner-pulse",o);class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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


    `}connectedCallback(){this.render(),this.scale()}scale(){const r=this.shadowRoot.querySelectorAll(".pointer"),s=[{transform:"translateY(0)"},{transform:"translateY(-20px)"}],i={duration:600,iterations:1/0,direction:"alternate"};r[0].animate(s,i),setTimeout(()=>r[1].animate(s,i),200),setTimeout(()=>r[2].animate(s,i),400),setTimeout(()=>r[3].animate(s,i),600)}render(){this.shadowRoot.innerHTML=`
      <style>${a.styles}</style>
      <div class="container">
        <div class="pointer"></div>
        <div class="pointer"></div>
        <div class="pointer"></div>
        <div class="pointer"></div>
      </div>
    `}}customElements.define("load-pointers",a);
