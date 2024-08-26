const valueString = 'abcdefghijklmnopqrstuwxyz0123456789'
const maxValue = valueString.length
const maxIdLength = 8

const getValueChar = (): string => {
	const randomNumber = Math.floor(Math.random() * maxValue)
	return valueString[randomNumber]
}

// rlid: Random Link Identifier
export default function rlid(): string {
	let id: string = ''
	let count: number = 0
	while (count < maxIdLength) {
		id += getValueChar()
		count++
	}
	return id
}
