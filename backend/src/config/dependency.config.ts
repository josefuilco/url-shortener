import LinkController from '../controllers/LinkController'
import MongoLinkRepository from '../repositories/MongoLinkRepository'
import LinkService from '../services/LinkService'

const container = () => {
	const linkRepository = new MongoLinkRepository()
	const linkService = new LinkService(linkRepository)
	const linkController = new LinkController(linkService)

	return { linkController }
}

export default container