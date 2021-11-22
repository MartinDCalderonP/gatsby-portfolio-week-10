import React from "react"
import { ICardProps } from "../common/interfaces"
import { Link } from "gatsby"

export default function Card({ title, image, slug }: ICardProps) {
  return (
    <div className="m-4 w-1/3 h-60 rounded-lg border border-black shadow-2xl bg-green-700 text-center">
      <Link to={"/" + slug}>
        <img className="w-full p-2 h-2/3" src={image} alt={title} width={300} />
        <h1 className="text-xl text-white p-2">{title}</h1>
      </Link>
    </div>
  )
}
