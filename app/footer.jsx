import Image from 'next/image'
import Search from '@/components/Search/Search'
import AnimatedText from '@/components/Search/AnimatedText'
import Link from 'next/link'
export default function Footer() {
  return (
    
<footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">@ 2023 <a href="https://https://devconnectrb.vercel.app/" className="hover:underline">DevConnect</a>.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link className="mr-4 hover:underline md:mr-6" href= "/about" >
            
            About us
            </Link>
        </li>
        <li>
        <Link className="mr-4 hover:underline md:mr-6" href= "/privacy" >
            
            Privacy Policy
            </Link>
        </li>
        <li>
        <Link className="mr-4 hover:underline md:mr-6" href= "/licensing" >
            
            API Licensing
            </Link>
        </li>
        <li>
        <Link className="mr-4 hover:underline md:mr-6" href= "/contact" >
            
            Contact
            </Link>
        </li>
    </ul>
</footer>

  )
}
