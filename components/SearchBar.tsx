"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface SearchBarProps {
  onSearch: (query: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSearch} className="relative">
      <Input
        type="text"
        placeholder="Search courses..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pr-10 border-black focus:ring-[#FFD54F] focus:border-[#FFD54F] bg-white"
      />
      <button
        type="submit"
        className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-[#FFD54F]"
      >
        <Search className="h-5 w-5" />
      </button>
    </form>
  )
}

