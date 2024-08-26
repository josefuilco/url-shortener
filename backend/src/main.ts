import express from 'express'
import cors from 'cors'
import linkRouter from './router/link.routes'

const main = () => {
	const app = express()
	const PORT = process.env.SERVER_PORT

	app.use(cors({
		origin: '*',
		methods: ['POST', 'GET']
	}))
	app.use(express.json())
	app.use(express.urlencoded({ extended: false }))

	app.use('/api/v1.0/public/link', linkRouter)

	app.listen(PORT, () => {
		if (!PORT) throw new Error('Server.Without.Port')
		console.info(`Server initializated on http://localhost:${PORT}`)
	})
}

main()
