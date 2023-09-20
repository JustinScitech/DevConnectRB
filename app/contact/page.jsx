'use client'
import Image from 'next/image'
import Search from '@/components/Search/Search'
import AnimatedText from '@/components/Search/AnimatedText'
import {motion} from 'framer-motion';
import Link from 'next/link';
export default function contact() {
  const container = {
    hidden: {opacity: 0, scale: 0}, visible: {opacity: 1, scale:1, transition: {type: "spring", damping: 10, stiffness: 120}}
};
  return (
    <main className="flex flex-col items-center gap-10 justify-center p-24">


      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="mb-3 text-4xl font-bold">
        <AnimatedText sentence = "Contact us" styling = "bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent"/>
        </h1>
      </div>
      <motion.div className = "flex" variants = {container} initial = "hidden" animate = "visible">
      <h1 className='text-white font-light'>
        DevConnect uses Discord as its main form of communications. You can reach out to us through all of these social platforms:
      </h1>
      </motion.div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
      <motion.div className = "flex" variants = {container} initial = "hidden" animate = "visible">
        <a
          href="https://discord.gg/DRUxnqv9Gk"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Communications server{' '}
            <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            For business inquiries we find it best you contact us through discord or email!
          </p>
        </a>
        </motion.div>
        </div>
      
    </main>
  )
}
