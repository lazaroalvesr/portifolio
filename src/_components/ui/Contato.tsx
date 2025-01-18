"use client"

import { FormContact } from '@/lib/interface'
import { ArrowRight } from 'lucide-react'
import { FormEvent, useState } from 'react'
import emailjs from '@emailjs/browser'
import { formatTelephone } from '@/lib/formatTelephone'


export const Contato = () => {
    const [data, setData] = useState<FormContact>({
        name: '',
        email: '',
        telephone: '',
        message: ''
    })

    const [sucessMessage, setSucessMessage] = useState('')


    const handleTelephoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedValue = formatTelephone(e.target.value);
        setData((prevData) => ({
            ...prevData,
            telephone: formattedValue,
        }));
    };

    function sendEmail(e: FormEvent) {
        e.preventDefault()

        setSucessMessage('Sua mensagem foi enviada com sucesso! Em breve, nossa equipe entrará em contato com você.');

        const formattedTelephone = formatTelephone(data.telephone)

        const templateParams = {
            name: data.name,
            message: data.message,
            email: data.email,
            telephone: formattedTelephone
        }

        emailjs.send(
            process.env.NEXT_PUBLIC_SERVICE_ID as string,
            process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
            templateParams, process.env.NEXT_PUBLIC_USER_ID as string)
            .then((response) => {
                console.log(response.text)
                setData({
                    name: '',
                    email: '',
                    message: '',
                    telephone: ''
                })
            }, (err) => {
                console.error('Error', err)
            })

    }

    return (
        <section className="w-full bg-[#101010] text-[#FAFAFA] pt-20" id="contato">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
                    <div className="space-y-2">
                        <div className="flex items-center justify-center gap-2 text-blue-500">
                            <ArrowRight className="h-4 w-4" />
                            <h2 className="text-lg font-medium">Entre em contato</h2>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tighter">
                            Pronto para transformar suas ideias em realidade? Vamos conversar!
                        </h3>
                    </div>
                    <div className="w-full max-w-md mx-auto p-6 rounded-lg bg-gray-900 backdrop-blur-sm border border-gray-600">
                        <form onSubmit={sendEmail} className="space-y-6 text-left">
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-medium text-[#FAFAFA]">
                                    Nome
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    onChange={(e) => setData((prevData) => ({ ...prevData, name: e.target.value }))}
                                    required
                                    className="w-full px-3 py-2 bg-[#101010] border border-white/10 rounded-md text-[#FAFAFA] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                                    placeholder="Seu nome completo"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-[#FAFAFA]">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={(e) => setData((prevData) => ({ ...prevData, email: e.target.value }))}
                                    required
                                    className="w-full px-3 py-2 bg-[#101010] border border-white/10 rounded-md text-[#FAFAFA] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                                    placeholder="seu@email.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="block text-sm font-medium text-[#FAFAFA]">
                                    Telefone
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    value={data.telephone}
                                    onChange={handleTelephoneChange}
                                    type="tel"
                                    required
                                    maxLength={15}
                                    className="w-full px-3 py-2 bg-[#101010] border border-white/10 rounded-md text-[#FAFAFA] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                                    placeholder="(00) 00000-0000"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium text-[#FAFAFA]">
                                    Mensagem
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    onChange={(e) => setData((prevData) => ({ ...prevData, message: e.target.value }))}
                                    rows={4}
                                    className="w-full px-3 py-2 bg-[#101010] border border-white/10 rounded-md text-[#FAFAFA] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent resize-none"
                                    placeholder="Descreva seu projeto ou necessidade...">
                                </textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-800 to-blue-900 text-[#FAFAFA] font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                                Entrar em Contato
                            </button>
                            {sucessMessage && (
                                <div className="mt-4 p-4 bg-green-500 text-white rounded-md shadow-md">
                                    {sucessMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}