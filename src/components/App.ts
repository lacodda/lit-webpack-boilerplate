import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import './Navbar';

@customElement('app-el')
export default class App extends LitElement {
  override render() {
    return html`
    <navbar-el></navbar-el>
    <slot></slot>
  `;
  }
}