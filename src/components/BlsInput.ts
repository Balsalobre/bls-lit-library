import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { MainStyles } from '../style/index.js';
import BlsInputStyles from './BlsInput.styles'

export class BlsInput extends LitElement {

  static styles = [
    MainStyles.styles,
    BlsInputStyles
  ];

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
