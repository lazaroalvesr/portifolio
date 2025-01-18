import { Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export const CardContact = () => {
    return (
        <div className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <div className="flex flex-wrap justify-center gap-4">
                <Link
                    href="https://www.linkedin.com/in/l%C3%A1zaro-alves-r/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-transparent text-white border border-zinc-700 rounded-md hover:bg-zinc-800 hover:text-white transition-colors duration-200"
                >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                </Link>

                <Link
                    href="mailto:lazaroalves12355@gmail.com"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-transparent text-white border border-zinc-700 rounded-md hover:bg-zinc-800 hover:text-white transition-colors duration-200"
                >
                    <Mail className="h-5 w-5" />
                    <span>Email</span>
                </Link>
            </div>
        </div>
    )
}