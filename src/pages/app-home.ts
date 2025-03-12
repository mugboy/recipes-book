import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
// import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

import { styles } from '../styles/shared-styles';

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome!';

  static styles = [
    styles,
    css``];

  async firstUpdated() {
    // this method is a lifecycle even in lit

  }

  @property()
  num = 0;

  @property()
  handlers = {
    plus1: () => { this.num = this.num + 1; },
    minus: () => { this.num = this.num - 1; if (this.num < 0) this.num = 0},
    reset: () => { this.num = 0; }
  }

  render() {
    return html`
      <main>
        <sl-button @click="${this.handlers.plus1}">Plus 1</sl-button>
        <sl-button @click="${this.handlers.minus}">Minus 1</sl-button>
        <sl-button @click="${this.handlers.reset}">Reset</sl-button>
        <h1>${this.num}</h1>
      </main>
    `;
  }
}
