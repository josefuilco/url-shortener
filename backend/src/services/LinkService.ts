import ILinkRepository from '../repositories/ILinkRepository'
import ILinkService from './ILinkService'
import Link from '../models/Link'

export default class LinkService implements ILinkService {
	public constructor (private readonly _repository: ILinkRepository) {}

	public async saveUrl(link: Link): Promise<string> {
		const linkId = await this._repository.saveLink(link)
		return linkId
	}

	public async getUrl(linkId: string): Promise<string> {
		const url = await this._repository.findLink(linkId)
		return url
	}

	public async UrlList(): Promise<Array<Link>> {
		const links = await this._repository.getAllLinks()
		return links
	}
}
