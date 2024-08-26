import { Router } from 'express'
import container from '../config/dependency.config'

const { linkController } = container()
const linkRouter = Router()

// POST /api/v1.0/public/link/uploadLink
linkRouter.post('/uploadLink', (req, res) => linkController.updloadLink(req, res))
// GET /api/v1.0/public/link/findLink/:id
linkRouter.get('/findLink/:id', (req, res) => linkController.findLink(req, res))
// GET /api/v1.0/public/link/allLinks
linkRouter.get('/allLinks', (req, res) => linkController.linkList(req, res))

export default linkRouter
