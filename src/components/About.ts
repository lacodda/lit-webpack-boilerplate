import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('about-el')
export default class About extends LitElement {
  static override styles = css`
    .about__container {
      display: grid;
      justify-content: center;
      align-content: center;
      background: var(--gr-lime-blue);
      width: 100%;
      height: 100%;
    }
    .about__title {
      display: flex;
      > h1 {
        width: max-content;
        text-transform: uppercase;
        background: var(--teal);
        background: var(--gr-teal-blue);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  `;
  override render() {
    return html`
      <div class="about__container">
        <div class="about__title">
          <h1>About</h1>
        </div>
      </div>
  `;
  }
}