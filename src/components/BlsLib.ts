import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class BlsLib extends LitElement {
  static styles = css`
    /* :host {
      display: block;
      padding: 25px;
      color: var(--bls-lib-text-color, #000);
    } */
  `;

  @property({ type: String })
  description = 'Default description';

  @property({ type: String })
  label = 'Default label';

  @property({ type: String })
  placeholder = 'Default placeholder';
  
  @property({ type: String, attribute: 'description-type' })
  descriptionType = 'info';

  @property({ type: Boolean, attribute: 'with-description' })
  withDescription = false;

  @property({ type: Boolean, attribute: 'with-label' })
  withLabel = false;

  __increment() {
    this.label += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.label}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
