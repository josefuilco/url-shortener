export interface Link {
	_id: string
	website: string
}

export function validateId(id: string): string {
	const regex = /[a-z0-9]{8}/
	if (!regex.test(id)) throw new Error('LinkId.Invalid')
	return id
}

const haveProtocol = (protocol: string, url: string) => {
	const length = protocol.length + 3;
	return url.slice(0, length) === `${protocol}://`
}

// TODO: Validar si es un sitio web
export function validateWebsite(url: string): string {
	if (haveProtocol('http', url))
		return url
	if (haveProtocol('https', url))
		return url
	const regex = /^[a-z0-9]+\.[a-z]+/
	if (!regex.test(url)) throw new Error('Website.Invalid')
	return `http://${url}`
}