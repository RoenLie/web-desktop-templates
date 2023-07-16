import { LitElement, html } from 'lit';
import {customElement} from 'lit/decorators.js'


@customElement('maui-app')
export class AppElement extends LitElement {
	protected override render() {
		return html`
		Hell yea, it works
		`
	}
}