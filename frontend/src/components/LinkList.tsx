import { useEffect, useState } from 'react'
import { Link } from '../models/Link'
import DataProvider from '../data/DataProvider'
import { makeShortLink } from '../utils/makeShortLink'
import CopyButton from './CopyButton'
import { useClipboard } from '../hooks/useClipboard'
import './styles/LinkList.css'

export default function LinkList(): JSX.Element {
	const [ links, setLinks ] = useState<Link[]>()
	const clipboard = useClipboard()

	useEffect(() => {
		try {
			const dataProvider = new DataProvider()
			const bringData = async () => {
				const linkList = await dataProvider.Get<Link[]>('/api/v1.0/public/link/allLinks')
				setLinks(linkList)
			}
			bringData()
		} catch (error) {
			console.error(error)
		}
	}, [])

	return (
		<ul id="list-link">
			{links?.map((value, index) => {
				return (
					<li key={index}>
						<div>{value.website}</div>
						<div>{makeShortLink(value._id)}<CopyButton onClick={() => clipboard(makeShortLink(value._id))}/></div>
					</li>
				)
			})}
		</ul>
	)
}