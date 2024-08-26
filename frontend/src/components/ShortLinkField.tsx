import { useContext, useEffect, useState } from 'react'
import CopyButton from './CopyButton'
import TextField from './TextField'
import { LinkContext } from '../context/LinkContext'
import './styles/ShortLinkField.css'
import { useClipboard } from '../hooks/useClipboard'
import { makeShortLink } from '../utils/makeShortLink'

export default function ShortLinkField(): JSX.Element {
	const linkContext = useContext(LinkContext)
	const [ shortLink, setShortLink ] = useState('')
	const clipboard = useClipboard()

	useEffect(() => {
		if (linkContext?.link.website) {
			setShortLink(makeShortLink(linkContext.link._id))
		}
	}, [linkContext?.link])
	
	return (
		<div className='short-link-field'>
			<TextField
			type='text'
			name='shortLink'
			placeholder="Tu link acortado"
			value={shortLink}
			isRequired={false}
			isReadonly={true}
			/>
			<CopyButton onClick={() => clipboard(shortLink)}/>
		</div>
	)
}