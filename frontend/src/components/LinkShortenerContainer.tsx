import { useState } from 'react'
import { LinkContext } from '../context/LinkContext'
import LongLinkForm from './LongLinkForm'
import ShortLinkField from './ShortLinkField'
import { Link } from '../models/Link'

export default function LinkShortenerContainer(): JSX.Element {
	const linkInstance: Link = {
		_id: '',
		website: ''
	}
	const [ link, setLink ] = useState<Link>(linkInstance)
	
	return (
		<LinkContext.Provider value={{ link, setLink }}>
			<LongLinkForm />
			<ShortLinkField />
		</LinkContext.Provider>
	)
}