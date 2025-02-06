"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import type { Material } from "../lib/courses"

interface CourseUploaderProps {
  onUpload: (materials: Material[]) => void
}

export function CourseUploader({ onUpload }: CourseUploaderProps) {
  const [uploadedFiles, setUploadedFiles] = useState<Material[]>([])

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newMaterials = acceptedFiles.map((file) => ({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        type: file.type.startsWith("video/") ? "video" : "document",
        url: URL.createObjectURL(file),
      }))
      setUploadedFiles((prev) => [...prev, ...newMaterials])
      onUpload(newMaterials)
    },
    [onUpload],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div className="mt-4">
      <div
        {...getRootProps()}
        className={`p-6 border-2 border-dashed rounded-md text-center cursor-pointer ${
          isDragActive ? "border-[#FFD54F] bg-[#FFD54F]/10" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? <p>Drop the files here ...</p> : <p>Drag 'n' drop some files here, or click to select files</p>}
      </div>
      {uploadedFiles.length > 0 && (
        <div className="mt-4">
          <h4 className="text-lg font-semibold mb-2">Uploaded Files:</h4>
          <ul className="list-disc pl-5">
            {uploadedFiles.map((file) => (
              <li key={file.id}>
                {file.name} ({file.type})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

