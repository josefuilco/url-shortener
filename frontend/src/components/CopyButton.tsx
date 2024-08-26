import Button from './Button'
import CopyIcon from './icons/CopyIcon'
import './styles/CopyButton.css'

interface Props {
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function CopyButton({ onClick }: Props): JSX.Element {
	return (
		<Button className='copy-button' onClick={ onClick }>
			<CopyIcon />
		</Button>
	)
}