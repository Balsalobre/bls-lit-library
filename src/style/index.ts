import {LitElement, css, CSSResultGroup} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('super-element')
export class MainStyles extends LitElement {
  static styles = css`
    .flex-center {
      display: flex;
      justify-content: center;
      align-items: center;
    } 
  ` as CSSResultGroup;
}
