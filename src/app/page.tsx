import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Streaver app</h1>
        <p className="text-gray-600">
          <Link href="/posts" className="text-blue-500 underline">Go to Posts Page</Link>
        </p>
      </div>
    </div>
  );
}