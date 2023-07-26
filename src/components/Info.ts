import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('info-el')
export default class Info extends LitElement {
  static override styles = css`
    .info__container {
      display: grid;
      justify-content: center;
      align-content: center;
      background: var(--gr-pink-violet);
      width: 100%;
      height: 100%;
    }
    .info__title {
      display: flex;
      > h1 {
        width: max-content;
        text-transform: uppercase;
        background: var(--purple);
        background: var(--gr-violet-purple);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  `;
  override render() {
    return html`
      <div class="info__container">
        <div class="info__title">
          <h1>Info</h1>
        </div>
      </div>
  `;
  }
}