import { provide } from '@roenlie/mimic-lit/context';
import { Route, Router } from '@vaadin/router';
import { LitElement, css, html } from 'lit';
import {customElement} from 'lit/decorators.js'


@customElement('vs-app')
export class AppElement extends LitElement {

	protected router = new Router();
	@provide('routes') protected routes: Route[] = [
		{
			path: '/',
			component: 'vs-layout',
			action: () => void import('./layout-element.js'),
			children: [
				{
					path: '',
					redirect: '/home'
				},
				{
					path:      'home',
					component: 'vs-home',
					action:    async () => void import('./home-element.js'),
				},
				{
					path:      'designer',
					component: 'vs-designer',
					action:    async () => void import('./designer-element.js'),
				}
			]
		},
	];

	public override connectedCallback(): void {
		super.connectedCallback();

		this.router.setRoutes(this.routes);
		this.router.setOutlet(this.shadowRoot);
	}

	public static override styles = [
		css`
		:host {
			display:grid;
			overflow: hidden;
			color: white;
			background-color: rgb(30 30 30);
		}
		`,
	];

}