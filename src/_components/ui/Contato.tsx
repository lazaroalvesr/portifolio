"use client"

import Link from "next/link"
import { ArrowRight, Linkedin, Mail } from 'lucide-react'

export const Contato = () => {
    return (
        <section className="w-full bg-black text-white pt-20" id="contato">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
                    <div className="space-y-2">
                        <div className="flex items-center justify-center gap-2 text-[#00238C]">
                            <ArrowRight className="h-4 w-4" />
                            <h2 className="text-lg font-medium">Vamos Conversar</h2>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tighter">
                            Faça contato comigo
                        </h3>
                    </div>

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
                </div>
            </div>
        </section>
    )
}