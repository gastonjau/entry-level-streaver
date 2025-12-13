import Link from "next/link";


export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Streaver app could not find the page</h1>
        <p className="text-gray-600">
          <Link href="/" className="text-blue-500 underline">Go to Home Page</Link>
        </p>
      </div>
    </div>
  );
}
