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
  
  get _getDescription() {
    return this.withDescription ?
      html`<label id="description">${this.description}</label>` : '';
  }

  get _getImput() {
    return html`
      <input id="input" type="text" placeholder="${this.placeholder}" />
    `;
  }

  get _getLabel(){
    console.info("get label", this.label);
    return this.withLabel ? html`<label id="label">${this.label}</label>` : '';
  }



  render() {
    return html`
      ${this._getLabel}
      ${this._getImput}
      ${this._getDescription}
    `;
  }
}
