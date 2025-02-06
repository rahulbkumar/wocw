"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { courses, type Course } from "../lib/courses"
import { SearchBar } from "../components/SearchBar"
import { CourseFilters } from "../components/CourseFilters"

export default function Home() {
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courses)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProgram, setSelectedProgram] = useState("All Programs")
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleFilterChange = (program: string, level: number | null) => {
    setSelectedProgram(program)
    setSelectedLevel(level)
  }

  useEffect(() => {
    const lowercaseQuery = searchQuery.toLowerCase()
    const filtered = courses.filter(
      (course) =>
        (course.title.toLowerCase().includes(lowercaseQuery) ||
          course.description.toLowerCase().includes(lowercaseQuery) ||
          course.program.toLowerCase().includes(lowercaseQuery)) &&
        (selectedProgram === "All Programs" || course.program === selectedProgram) &&
        (selectedLevel === null || course.level === selectedLevel),
    )
    setFilteredCourses(filtered)
  }, [searchQuery, selectedProgram, selectedLevel])

  return (
    <div className="animate-fadeIn">
      <motion.h2
        className="text-4xl font-bold mb-6 text-black gold-gradient"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        UWaterloo Courses
      </motion.h2>
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SearchBar onSearch={handleSearch} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <CourseFilters onFilterChange={handleFilterChange} />
      </motion.div>
      <AnimatePresence>
        {filteredCourses.length === 0 ? (
          <motion.p
            className="text-black text-center text-lg mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            No courses found. Try different search terms or filters.
          </motion.p>
        ) : (
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="card-hover border-black bg-white animate-float">
                  <CardHeader>
                    <CardTitle>
                      <Link href={`/course/${course.id}`} className="text-[#FFD54F] hover:underline">
                        {course.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-gray-700">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm font-semibold text-gray-700 flex justify-between">
                      <span>{course.program}</span>
                      <span className="bg-[#FFD54F] text-black px-2 py-1 rounded-full text-xs">
                        Level {course.level}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

