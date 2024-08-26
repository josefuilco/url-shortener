import Link from '../models/Link'
import ILinkRepository from './ILinkRepository'
import { insertLink, findById, findByWebsite, listLinks } from '../config/mongo.config'

export default class MongoLinkRepository implements ILinkRepository {
	public async saveLink(currentLink: Link): Promise<string> {
		const dbResponse = await findByWebsite(currentLink.getWebsite())
		if (dbResponse) {
			const link = new Link(dbResponse['_id'], dbResponse['website'])
			return link.getId()
		}
		await insertLink(currentLink)
		return currentLink.getId()
	}

	public async findLink(linkId: string): Promise<string> {
		const dbResponse = await findById(linkId)
		if (!dbResponse) throw new Error('Link.NotFound')
		const link = new Link(dbResponse['_id'], dbResponse['website'])
		return link.getWebsite()
	}

	public async getAllLinks(): Promise<Array<Link>> {
		const links = await listLinks()
		return links
	}
}
