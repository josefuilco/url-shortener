import Link from '../models/Link'

export default interface ILinkRepository {
	saveLink: (currentLink: Link) => Promise<string>
	findLink: (linkId: string) => Promise<string>
	getAllLinks: () => Promise<Array<Link>>
}
