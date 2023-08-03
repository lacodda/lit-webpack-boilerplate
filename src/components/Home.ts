import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './Button';
import logo from '@/images/logo.svg';
import { scaffoldingStyles } from '@/styles/scaffolding';

enum Command {
  Inc = 1,
  Dec = -1
}

@customElement('home-el')
export default class Home extends LitElement {
  static override styles = [scaffoldingStyles, css`
    .home__container {
      display: grid;
      justify-content: center;
      align-content: center;
      background: var(--gr-azure-pink);
      width: 100%;
      height: 100%;
    }
    .home__title {
      display: flex;
      column-gap: 1rem;
      > h1 {
        width: max-content;
        text-transform: uppercase;
        background: var(--teal);
        background: var(--gr-teal-blue);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .home__counter {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
    .home__count {
      font-size: 2rem;
      font-weight: 700;
      color: var(--white);
    }
  `];

  @property({ type: Number })
  counter = 0;

  private _onClick(command: Command) {
    this.counter = this.counter + command;    
    this.dispatchEvent(new CustomEvent('count-changed'));
  }

  override render() {
    return html`
      <div class="home__container">
        <div class="home__title">
          <img src=${logo} width="100" />
          <h1>Lit Boilerplate</h1>
        </div>
        <div class="home__counter">
          <button-el class="btn" @click=${() => this._onClick(Command.Inc)}>+</button-el>
          <button-el class="btn" @click=${() => this._onClick(Command.Dec)}>−</button-el>
          <div class="home__count">${this.counter}</div>
        </div>
      </div>
  `;
  }
}