'use client'
import Image from 'next/image'
import Search from '@/components/Search/Search'
import AnimatedText from '@/components/Search/AnimatedText'
import {motion} from 'framer-motion';
import Link from 'next/link';
export default function post() {
  const container = {
    hidden: {opacity: 0, scale: 0}, visible: {opacity: 1, scale:1, transition: {type: "spring", damping: 10, stiffness: 120}}
};
  return (
    <main className="flex flex-col items-center gap-10 justify-center p-24">


      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="mb-3 text-4xl font-bold">
        <AnimatedText sentence = "Make a Post" styling = "bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent"/>
        </h1>
      </div>
      
      <div className="w-1/2 mt-5">
          {/* Make form work with firebase authentication */}
          <motion.div variants= {container} initial = "hidden" animate = "visible">
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Title" className="p-3 rounded-md shadow-sm border bg-black border-gray-800" required />
            <input type="text" placeholder="Description" className="p-3 py-20 rounded-md shadow-sm border bg-black border-gray-800" required />
            <input type="file" placeholder="Choose an image" className="p-3 py-5 rounded-md shadow-sm border bg-black border-gray-800" required />
            <motion.button type="submit" className="p-3 bg-gradient-to-b from-blue-800 to-purple-800 text-white rounded-full hover:opacity-90 focus:outline-none" whileHover={{
            scale: 1.05,
            transition: { duration: 0.3, type: "spring" },
        }}
        whileTap={{ scale: 0.9 }}>
Submit
            </motion.button>
          </form>
          </motion.div>
        </div>

    </main>
  )
}
