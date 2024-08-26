import api from './types/api'
import Route from './types/route'

export default class DataProvider {
	private readonly API: api

	public constructor() {
		this.API = import.meta.env.VITE_API
	}

	// Private Methods
	private Path(route: Route): string {
		return `${this.API}${route}`
	}

	private Config(method: string, body?: object): RequestInit {
		const requestInit: RequestInit = {
			method,
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}
		return requestInit;
	}

	// Public Methods
	public async Get<T>(route: Route): Promise<T> {
		const response = await fetch(this.Path(route), this.Config('GET'))
		if (!response.ok) throw new Error('Data no found.')
		return response.json()
	}

	public async Post<T>(route: Route, body: object): Promise<T> {
		const response = await fetch(this.Path(route), this.Config('POST', body));
		if (!response.ok) throw new Error('Data no send.')
		return response.json()
	}

	public async Put<T>(route: Route, body: object): Promise<T> {
		const response = await fetch(this.Path(route), this.Config('PUT', body));
		if (!response.ok) throw new Error('Data no updated.')
		return response.json()
	}
	
	public async Delete<T>(route: Route): Promise<T> {
		const response = await fetch(this.Path(route), this.Config('DELETE'));
		if (!response.ok) throw new Error('Data no deleted.')
		return response.json()
	}
}