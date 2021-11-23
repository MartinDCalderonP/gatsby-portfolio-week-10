import React, { useState } from "react"
import { IChipsListProps } from "../common/interfaces"

const Tags = [
  "HTML",
  "CSS",
  "SASS",
  "TailwindCSS",
  "JavaScript",
  "React",
  "Hooks",
  "TypeScript",
  "ContextAPI",
  "Jest",
  "Gatsby",
]

export default function ChipsList({ selectedTag }: IChipsListProps) {
  const [selectedChip, setSelectedChip] = useState("")

  const handleChipClick = (tag: string) => {
    setSelectedChip(tag)
    if (selectedTag) {
      selectedTag(tag)
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-between w-11/12 overflow-y-hidden">
        {Tags.map((tag, index) => (
          <div
            key={`chip${index}`}
            className={
              `flex items-center justify-center mr-2 p-2 rounded-full bg-gray-200 text-gray-700 text-sm cursor-pointer` +
              (selectedChip === tag ? ` bg-gray-400 text-gray-900` : "")
            }
            onClick={() => handleChipClick(tag)}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  )
}
