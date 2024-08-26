import { createContext } from 'react'
import { Link } from '../models/Link'

interface LinkContextType {
  link: Link
  setLink: React.Dispatch<React.SetStateAction<Link>>
}

export const LinkContext = createContext<LinkContextType | undefined>(undefined)
