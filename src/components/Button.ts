import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('button-el')
export default class Button extends LitElement {
  @property({ type: Boolean })
  disabled = false;

  static override styles = css`
    button {
      background-image: linear-gradient(to top, var(--teal) 0%, var(--blue) 51%, var(--teal) 100%);
      padding: .75rem .5rem;
      text-align: center;
      text-transform: uppercase;
      transition: 0.5s;
      background-size: auto 200%;
      color: var(--white);
      border-radius: 0.5rem;
      display: flex;
      border-color: transparent;
      font-weight: 700;
      font-size: 1.8rem;
      cursor: pointer;
      line-height: .5rem;
      align-items: center;
      height: min-content;
    
      &:hover {
        background-position: right center;
        /* change the direction of the change here */
        color: var(--white);
        text-decoration: none;
      }
    }
  `;
  override render() {
    return html`
      <button ?disabled=${this.disabled}><slot></slot></button>
  `;
  }
}