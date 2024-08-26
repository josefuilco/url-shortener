import { useEffect, useState } from 'react'

export const useClipboard = () => {
	const [ text, setText ] = useState('')
	
	useEffect(() => {
		window.navigator.clipboard.writeText(text)
	}, [text])

	return setText
}