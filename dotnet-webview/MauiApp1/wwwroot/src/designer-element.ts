import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';


@customElement('vs-designer')
export class DesignerElement extends LitElement {

	public override render() {
		return html`
			<div>Designer</div>
		`;
	}

	public static override styles = [
		css`
		:host {
			display: flex;
		}
	`,
	];

}


declare global {
	interface HTMLElementTagNameMap {
		'vs-designer': DesignerElement;
	}
}
