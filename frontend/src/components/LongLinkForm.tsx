import { useContext } from 'react'
import SendButton from './SendButton'
import TextField from './TextField'
import './styles/LongLinkForm.css'
import { LinkContext } from '../context/LinkContext'
import { Link, validateId, validateWebsite } from '../models/Link'
import DataProvider from '../data/DataProvider'

export default function LongLinkForm(): JSX.Element {
	const linkContext = useContext(LinkContext)

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const formObject = Object.fromEntries(formData)
		const dataProvider = new DataProvider()

		try {
			const currentLink: Link = {
				_id: '',
				website: validateWebsite(String(formObject['website']))
			}
			const { _id } = await dataProvider.Post<Link>('/api/v1.0/public/link/uploadLink', { website: currentLink.website })
			currentLink._id = validateId(_id)
			linkContext?.setLink(currentLink)
		} catch {
			alert(`El sitio web ${formObject['website']} es invalido.`)
		}
	}

	return (
		<form onSubmit={handleSubmit} className="long-link-form">
			<TextField
			type='text'
			name='website'
			placeholder='Ingresa tu enlace'
			isRequired={true}
			/>
			<SendButton	/>
		</form>
	)
}