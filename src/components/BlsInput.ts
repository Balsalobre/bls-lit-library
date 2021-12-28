import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { MainStyles } from '../style/index.js';

export class BlsInput extends LitElement {

  static styles = [
    MainStyles.styles,
    css`
      :host {
        --light-color: #818181;
        --dark-color: #a1cfff;

        --light-text-color: #0e0e0e;
        
        --light-color-focused: #476ead;
        --dark-color-focused: #476ead;

        --light-border: #323c79;
        --dark-border: #a1cfff;
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      .group {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 100%;
        padding-top: 1rem;
      }

      .group__input {
        width: 99%;
        padding: 0.6rem 0;
        font-size: 16px;
        border: none;
        outline: none;
        background: transparent;
      }

      .group__label {
        position: absolute;
        top: 16px;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        pointer-events: none;
        transition: .5s;
        text-transform: capitalize;
      }

      .group__input:focus + .group__label,
      .group__input:not(:placeholder-shown).group__input:not(:focus) + .group__label {
        top: -7px;
        left: 0;
        font-size: 12px;
      }

      .group__input[readonly] {
        border-style: dotted;
        cursor: not-allowed;
        color: #777;
      }

      .group__input[disabled] {
        --input-border: #ccc;
        background-color: #eee;
        cursor: not-allowed;
      }

      .group.light .group__input {
        color: var(--light-text-color);
        border-bottom: 1px solid var(--light-color);
      }

      .group.light .group__label {
        color: var(--light-color);
      }

      .group.dark .group__input {
        color: var(--dark-color);
        border-bottom: 1px solid var(--dark-color);
      }

      .group.light .group__input:focus {
        border-bottom-color: var(--input-focus-color,  var(--light-color-focused));
        color: var(--light-text-color);
      }

      .group.light .group__input:focus + .group__label {
        color: var(--input-focus-color,  var(--light-color-focused));
      }
  `];

  @property({ type: String })
  ambient = 'light';

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
        class="group__input"
        type="text"
        placeholder="&nbsp;"
        ?readonly="${this.isReadonly}"
        ?disabled="${this.disabled}"/>
    `;
  }

  get _getLabel() {
    return this.withLabel ? html`<label id="label" class="group__label">${this.label}</label>` : '';
  }

  render() {

    return html`
      <div class="group ${this.ambient}">
        ${this._getImput} ${this._getLabel} ${this._getDescription}
      </div>
    `;
  }
}
