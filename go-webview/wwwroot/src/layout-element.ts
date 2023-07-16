import { sharedStyles } from '@roenlie/mimic-lit/styles';
import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { picoCSS } from './pico-css.js';


@customElement('vs-layout')
export class LayoutElement extends LitElement {

	public override render() {
		return html`
			<nav>
				<a href="/home">Home</a>
				<a href="/designer">Designer</a>
			</nav>
			<slot></slot>
		`;
	}

	public static override styles = [
		sharedStyles,
		picoCSS,
		css`
		:host {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: auto 1fr;
		}
		nav {
			justify-content: space-around;
			border-bottom: 1px solid teal;
		}
	`,
	];

}


declare global {
	interface HTMLElementTagNameMap {
		'vs-layout': LayoutElement;
	}
}
