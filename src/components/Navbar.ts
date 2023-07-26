import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('navbar-el')
export default class Navbar extends LitElement {
  static override styles = css`
    .navbar__container {
      position: absolute;
      width: 100%;
    }
    .navbar__menu {
      display: flex;
      justify-content: center;
      padding: 1rem;
      gap: 1rem;
      > a {
        color: var(--white);
        font-weight: 700;
        text-decoration: none;
        transition: 1s;
        text-transform: uppercase;
        &:hover {
          color: var(--purple);
        }
      }
    }
  `;
  override render() {
    return html`
      <nav class="navbar__container">
        <div class="navbar__menu">
          <a href="/">Home</a>
          <a href="/info">Info</a>
          <a href="/about">About</a>
        </div>
      </nav>
  `;
  }
}