import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataProvider from '../data/DataProvider'
import { Link } from '../models/Link'

export default function LinkView(): JSX.Element {
	const { linkId } = useParams()

	useEffect(() => {
		try {
			const dataProvider = new DataProvider()
			const bringData = async () => {
				const { website } = await dataProvider.Get<Link>(`/api/v1.0/public/link/findLink/${linkId}`)
				window.location.href = website
			}
			bringData()
		} catch (error) {
			console.log(error)
		}
	}, [linkId])

	return (
		<></>
	)
}