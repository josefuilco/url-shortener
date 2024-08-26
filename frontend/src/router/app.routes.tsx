import { createBrowserRouter } from 'react-router-dom'
import HomeView from '../views/HomeView'
import LinkView from '../views/LinkView'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeView />
	},
	{
		path: ':linkId',
		element: <LinkView />
	}
])

export default router