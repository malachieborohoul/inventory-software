import Link from "next/link";

// classNameclassNameclassNa
export default function Home() {
  return (
    <div className='flex items-center justify-center min-h-screen flex-col'>
      <h2 className='text-3xl'>Inventory Management Software</h2>
      <Link href='/dashboard/home/dashboard'>Dashboard</Link>
    </div>
  )
}
