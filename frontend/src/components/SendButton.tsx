import Button from './Button'
import SendIcon from './icons/SendIcon'
import './styles/SendButton.css'

export default function SendButton(): JSX.Element {
	return (
		<Button className="send-button">
			<SendIcon />
		</Button>
	)
}