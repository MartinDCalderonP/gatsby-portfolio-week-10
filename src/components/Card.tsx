import React from "react"
import { ICardProps } from "../common/interfaces"
import { Link } from "gatsby"

export default function Card({ title, image }: ICardProps) {
  return (
    <div className="mx-4 my-8 w-1/4 h-3/4 rounded-lg border border-black shadow-2xl bg-green-700 text-center">
      <Link to={`/projects/${title}`}>
        <h1 className="text-2xl text-white p-2">{title}</h1>
      </Link>
    </div>
  )
}
