'use client'

import Link from "next/link"
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from 'lucide-react'

export const Footer = () => {
    const [anoCriacao, setAnoCriacao] = useState("");

    useEffect(() => {
        const obterAnoAtual = () => {
            const data = new Date();
            return data.getFullYear().toString();
        };

        setAnoCriacao(obterAnoAtual());
    }, []);


    return (
        <footer className="mt-12  pb-4">
            <div className="mt-24  border-t border-zinc-800 pt-8">
                <div className="flex max-w-7xl m-auto flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-zinc-400">
                        <p className="text-sm">© {anoCriacao} Alves R. Alguns direitos reservados.</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            href="https://www.linkedin.com/in/l%C3%A1zaro-alves-r/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link
                                href="mailto:lazaroalves12355@gmail.com"
                                className="text-zinc-400 hover:text-white transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://github.com/lazaroalvesr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer >
    )
}