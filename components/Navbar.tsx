// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {

  return (
    <nav className="bg-black-900 shadow-md w-full fixed top-0 z-10 m-0">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-12 bg-black m-0">
        {/* Left side - Name */}
        <div className="text-4xl font-bold text-gray-700 bg-black ">TAHA-KHAN-PORTFOLIO</div>
        
        {/* Mobile menu button */}
        <div className="lg:hidden bg-black">
          <button
        
            className="text-gray-800 focus:outline-none bg-black"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            
            >
               
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
                (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )
            </svg>
          </button>
        </div>

          <ul className="flex flex-col lg:flex-row lg:space-x-20 mt-4 lg:mt-0 bg-blue-900 m-4">
            <li>
              <Link href="/">
                <h6 className="text-black hover:text-green-600  px-4  flex gap-4">Home</h6>
              </Link>
            </li>
            <li>
              <Link href="/About">
                <h6 className="text-black hover:text-green-600  px-4  flex gap-14">About</h6>
              </Link>
            </li>
            <li>
              <Link href="/Project">
                <h6 className="text-black hover:text-green-600  px-4  flex space-x-5">Projects</h6>
              </Link>
            </li>
            <li>
              <Link href="/Contact">
                <h6 className="text-black hover:text-green-600  px-4  flex space-x-5">Contact</h6>
              </Link>
            </li>
          </ul>
        </div>
        </nav>
        )};