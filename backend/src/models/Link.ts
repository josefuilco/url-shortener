export default class Link {
	private _id: string
	private website: string

	public constructor(id: string, website: string) {
		this._id = id
		this.website = website
	}

	public setId(id: string): void {
		this._id = id
	}

	public getId(): string {
		return this._id
	}

	public setWebsite(website: string): void {
		this.website = website
	}

	public getWebsite(): string {
		return this.website
	}
}
