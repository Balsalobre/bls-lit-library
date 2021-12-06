import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { MainStyles } from '../style/index.js';

export class BlsInput extends LitElement {

  static styles = [
    MainStyles.styles,
    css`
      :host {
        --input-border: #8b8a8b;
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      .group {
        position: relative;
        display: inline-block;
      }

      .input {
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        margin-bottom: 30px;
        margin-right: 10px;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        background: transparent;
      }

      label {
        position: absolute;
        top:0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        pointer-events: none;
        transition: .5s;
        text-transform: capitalize;
      }

      .group .input:focus ~ label {
        top: -20px;
        left: 0;
        color: #a1cfff;
        font-size: 12px;
      }

      .input[readonly] {
        border-style: dotted;
        cursor: not-allowed;
        color: #777;
      }

      .input[disabled] {
        --input-border: #ccc;
        background-color: #eee;
        cursor: not-allowed;
      }
  `];

  @property({ type: String })
  description = 'Default description';

  @property({ type: String })
  label = 'Default label';

  @property({ type: String, attribute: 'description-type' })
  descriptionType = 'info';

  @property({ type: Boolean, attribute: 'with-description' })
  withDescription = false;

  @property({ type: Boolean, attribute: 'with-label' })
  withLabel = false;

  @property({ type: Boolean, attribute: 'readonly' })
  isReadonly = false;

  @property({ type: Boolean, attribute: 'disabled'})
  disabled = false;


  get _getDescription() {
    return this.withDescription
      ? html`<label id="description" class="${this.descriptionType}">${this.description}</label>`
      : '';
  }

  get _getImput() {
    return html`
      <input
        id="input"
        class="input"
        type="text"
        ?readonly="${this.isReadonly}"
        ?disabled="${this.disabled}"/>
    `;
  }

  get _getLabel() {
    return this.withLabel ? html`<label id="label">${this.label}</label>` : '';
  }

  render() {

    return html`
      <div class="group">
        ${this._getImput} ${this._getLabel} ${this._getDescription}
      </div>
    `;
  }
}
