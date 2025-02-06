import Link from "next/link"

export default function NotFound() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4 text-black">404 - Page Not Found</h2>
      <p className="mb-4 text-gray-700">The page you are looking for does not exist.</p>
      <Link href="/" className="text-[#FFD54F] hover:underline">
        Return to Home
      </Link>
    </div>
  )
}

