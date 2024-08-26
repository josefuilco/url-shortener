import Link from '../models/Link'

export default interface ILinkService {
	saveUrl: (link: Link) => Promise<string>
	getUrl: (linkId: string) => Promise<string>
	UrlList: () => Promise<Array<Link>>
}
