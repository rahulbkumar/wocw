"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { courses, type Material } from "../../../lib/courses"
import { CourseUploader } from "../../../components/CourseUploader"

export default function CoursePage({ params }: { params: { id: string } }) {
  const course = courses.find((c) => c.id === params.id)
  const [lectures, setLectures] = useState<Material[]>(course?.lectures || [])

  if (!course) {
    notFound()
  }

  const handleUpload = (newMaterials: Material[]) => {
    setLectures((prev) => [...prev, ...newMaterials])
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <motion.h2
        className="text-4xl font-bold mb-4 text-black gold-gradient"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {course.title}
      </motion.h2>
      <motion.p
        className="mb-4 text-gray-700"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {course.description}
      </motion.p>
      <motion.div
        className="grid grid-cols-2 gap-4 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="bg-gray-100 p-3 rounded">
          <p className="text-black">
            <strong>Instructor:</strong> {course.instructor}
          </p>
        </div>
        <div className="bg-gray-100 p-3 rounded">
          <p className="text-black">
            <strong>Program:</strong> {course.program}
          </p>
        </div>
        <div className="bg-gray-100 p-3 rounded">
          <p className="text-black">
            <strong>Level:</strong> {course.level}
          </p>
        </div>
      </motion.div>

      <motion.h3
        className="text-2xl font-bold mb-2 text-[#FFD54F]"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Course Materials
      </motion.h3>
      <motion.ul
        className="list-disc pl-5 text-gray-700 mb-4"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {course.materials.map((material, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
          >
            {material}
          </motion.li>
        ))}
      </motion.ul>

      <motion.h3
        className="text-2xl font-bold mb-2 text-[#FFD54F]"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Lectures and Videos
      </motion.h3>
      <AnimatePresence>
        {lectures.length > 0 ? (
          <motion.ul
            className="list-disc pl-5 text-gray-700 mb-4"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            {lectures.map((lecture, index) => (
              <motion.li
                key={lecture.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
              >
                <a
                  href={lecture.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {lecture.name} ({lecture.type})
                </a>
              </motion.li>
            ))}
          </motion.ul>
        ) : (
          <motion.p
            className="mb-4 text-gray-700"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            No lectures or videos uploaded yet.
          </motion.p>
        )}
      </AnimatePresence>

      <motion.h3
        className="text-2xl font-bold mb-2 text-[#FFD54F]"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        Upload Course Materials
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <CourseUploader onUpload={handleUpload} />
      </motion.div>
    </motion.div>
  )
}

