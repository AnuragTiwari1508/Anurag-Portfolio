import Link from "next/link"
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="#home" className="text-xl font-bold">
              Anurag<span className="text-purple-500">Tiwari</span>
            </Link>
            <p className="text-gray-400 mt-2">Electronics Engineer & Web Developer</p>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link
              href="https://github.com/AnuragTiwari1508"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <GithubIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/anurag-tiwari-4b664627b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <LinkedinIcon className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:tiwarianurag342409@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <MailIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://wa.me/916261072872"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition-colors"
            >
              <span className="font-bold">W</span>
            </Link>
          </div>

          <div className="text-gray-400 text-sm">&copy; {currentYear} Anurag Tiwari. All rights reserved.</div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <div className="flex justify-center space-x-4">
            <Link href="#home" className="hover:text-purple-500 transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-purple-500 transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-purple-500 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-purple-500 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-purple-500 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
