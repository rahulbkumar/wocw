"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { programs, levels } from "../lib/courses"

interface CourseFiltersProps {
  onFilterChange: (program: string, level: number | null) => void
}

export function CourseFilters({ onFilterChange }: CourseFiltersProps) {
  const [selectedProgram, setSelectedProgram] = useState<string>("All Programs")
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null)

  const handleProgramChange = (value: string) => {
    setSelectedProgram(value)
    onFilterChange(value, selectedLevel)
  }

  const handleLevelChange = (value: string) => {
    const level = value === "All Levels" ? null : Number.parseInt(value)
    setSelectedLevel(level)
    onFilterChange(selectedProgram, level)
  }

  return (
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
      <Select onValueChange={handleProgramChange}>
        <SelectTrigger className="w-full sm:w-[200px] bg-white border-black">
          <SelectValue placeholder="Select Program" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All Programs">All Programs</SelectItem>
          {programs.map((program) => (
            <SelectItem key={program} value={program}>
              {program}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={handleLevelChange}>
        <SelectTrigger className="w-full sm:w-[200px] bg-white border-black">
          <SelectValue placeholder="Select Level" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All Levels">All Levels</SelectItem>
          {levels.map((level) => (
            <SelectItem key={level} value={level.toString()}>
              {level} Level
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

