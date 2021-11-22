import { ReactNode } from "react"

export interface ILayoutProps {
  children: ReactNode
  footer?: boolean
}

export interface INavbarItemProps {
  children: ReactNode
}

export interface ICardProps {
  slug: string
  title: string
  image: string
}

export interface IChipsListProps {
  selectedTag?: Function
}
