import { sharedStyles } from '@roenlie/mimic-lit/styles';
import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { picoCSS } from './pico-css.js';


@customElement('vs-home')
export class HomeElement extends LitElement {

	public override render() {
		return html`
			Hello
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
	`,
	];

}


declare global {
	interface HTMLElementTagNameMap {
		'pl-home-element': HomeElement;
	}
}
