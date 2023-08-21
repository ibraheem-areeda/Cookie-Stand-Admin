import Link from "next/link"

export default function Header() {
    return (
      <header className="flex items-center justify-between p-4 bg-blue-300 text-gray-50">
        <h1 className="text-4xl">Cookie Stand Admin</h1>

        <button
    
          type="submit"
          className="p-2 text-white bg-green-500 rounded"
        >
          <Link href={"overview"}>
          Overview
          </Link>
        </button>
      </header>
    )
  }
