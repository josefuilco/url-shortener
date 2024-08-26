import { RouterProvider } from 'react-router-dom'
import router from './router/app.routes'
import './App.css'

export default function App(): JSX.Element {
	return <RouterProvider router={router}/>
}
