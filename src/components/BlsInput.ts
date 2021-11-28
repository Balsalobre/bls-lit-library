import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { MainStyles } from '../style/index.js';
import { cssConfig } from '../style/config.js';


export class BlsInput extends LitElement {

  static styles = [
    MainStyles.styles,
    css`
      :host {
        --input-border: #8b8a8b;
        --input-focus-h: 245;
        --input-focus-s: 100%;
        --input-focus-l: 42%;
      }

      .input {
        font-size: 16px;
        font-size: max(16px, 1em);
        font-family: inherit;
        padding: 0.25em 0.5em;
        background-color: #fff;
        border: 2px solid var(--input-border);
        border-radius: 4px;
        line-height: 1;
      }
  `];

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
    return this.withDescription
      ? html`<label id="description" class="${this.descriptionType}">${this.description}</label>`
      : '';
  }

  get _getImput() {
    return html`
      <input id="input" class="input" type="text" placeholder="${this.placeholder}" />
    `;
  }

  get _getLabel() {
    return this.withLabel ? html`<label id="label">${this.label}</label>` : '';
  }

  render() {
    console.log(cssConfig);
    return html`
      <div class="flex-center">
        ${this._getLabel} ${this._getImput} ${this._getDescription}
      </div>
    `;
  }
}
