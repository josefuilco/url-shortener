import LinkList from '../components/LinkList'
import LinkShortenerContainer from '../components/LinkShortenerContainer'
import './styles/HomeView.css'

export default function HomeView(): JSX.Element {
	return (
		<>
			<main id="short-link">
				<h1 className='short-link__title'>Short<span className='short-link__title__blue'>Link</span></h1>
				<p className='short-link__text'>Minimiza la longitud de tus enlaces y compártelo con tus contactos de manera más optima y rápida.</p>
				<LinkShortenerContainer />
			</main>
			<section id='demo-link'>
				<h1 className='demo-link__title'>Lista de&nbsp;<span>Enlaces&nbsp;</span><span>Acortados</span></h1>
				<p className='demo-link__text'>Estos son links acortados recientemente para la demostración.</p>
				<LinkList />
			</section>
		</>
	)
}