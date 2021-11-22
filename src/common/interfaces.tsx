import { ReactNode } from "react"

export interface ILayoutProps {
  children: ReactNode
  footer?: boolean
}

export interface INavbarItemProps {
  children: ReactNode
}

export interface ICardProps {
  title: string
  image: string
  description: string
  stack: string
  slug: string
}
