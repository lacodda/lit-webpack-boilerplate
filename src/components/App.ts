import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-el')
export default class App extends LitElement {
  override render() {
    return html`
    <navbar-el>
      <a href="/">Home</a>
      <a href="/info">Info</a>
      <a href="/about">About</a>
    </navbar-el>
    <slot></slot>
  `;
  }
}