import ILinkService from '../services/ILinkService'
import { Response, Request } from 'express'
import rlid from '../utils/rlid.util'
import Link from '../models/Link'

export default class LinkController {
	public constructor(private readonly _service: ILinkService) {}

	public async updloadLink(req: Request, res: Response): Promise<void> {
		try {
			const { website } = req.body
			const newLinkId = rlid()
			const _id = await this._service.saveUrl(new Link(newLinkId, website))
			res.status(200).json({ _id })
		} catch (error) {
			console.error(error)
			res.status(500).json({ msg: 'Link not saved' })
		}
	}

	public async findLink(req: Request, res: Response): Promise<void> {
		try {
			const { id } = req.params
			const website = await this._service.getUrl(id)
			res.status(200).json({ website })
		} catch (error) {
			console.error(error)
			res.status(404).json({ msg: 'Link not found' })
		}
	}

	public async linkList(_req: Request, res: Response): Promise<void> {
		try {
			const links = await this._service.UrlList()
			res.status(200).json(links)
		} catch (error) {
			console.error(error)
			res.status(404).json({ msg: 'Links not found' })
		}
	}
}
