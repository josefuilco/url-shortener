import './styles/TextField.css'

interface Props {
	type: string
	name: string
	placeholder: string
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	value?: string
	isRequired: boolean
	isReadonly?: boolean
}

export default function TextField({ type, name, placeholder, onChange, value, isRequired, isReadonly }: Props): JSX.Element {
	return (
		<input 
		className='text-field'
		name={ name }
		type={ type }
		placeholder={ placeholder }
		onChange={ onChange }
		value={ value }
		required={ isRequired }
		readOnly={ isReadonly }
		/>
	)
}