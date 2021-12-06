import {LitElement, css, CSSResultGroup} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('main-styles')
export class MainStyles extends LitElement {
  static styles = css`
    * {
      font-family: var(--global-font, Helvetica, Arial);
    }

    .flex-center {
      display: flex;
      justify-content: center;
      align-items: center;
    } 
  ` as CSSResultGroup;
}
