import './styles/Button.css'

interface Props {
	className?: string
	children: JSX.Element
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({ className, children, onClick }: Props): JSX.Element {
	const defaultClassName = 'custom-button'
	const buttonClassName = className ? `${defaultClassName} ${className}` : defaultClassName
	return (
		<button className={ buttonClassName } onClick={ onClick }>
			{ children }
		</button>
	)
}