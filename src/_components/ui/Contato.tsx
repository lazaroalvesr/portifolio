"use client"

import { ArrowRight } from 'lucide-react'
import { CardContact } from './CardContact'



export const Contato = () => {

    return (
        <section className="w-full bg-[#101010] text-[#FAFAFA] pt-20" id="contato">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
                    <div className="space-y-2">
                        <div className="flex items-center justify-center gap-2 text-blue-500">
                            <ArrowRight className="h-4 w-4" />
                            <h2 className="text-lg font-medium">Vamos Conversar</h2>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tighter">
                            Faça contato comigo
                        </h3>
                    </div>
                </div>
                <div className='mt-12'>
                    <CardContact />
                </div>
            </div>
        </section>
    )
}