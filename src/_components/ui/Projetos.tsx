'use client'

import Image from "next/image"
import { CardProjetos } from "./CardProjetos"

export const Projetos = () => {
    return (
        <section id="home" className="lg:mt-60 mt-40 md:mt-72 w-full lg:p-0 p-5 max-w-7xl m-auto ">
            <div className="flex flex-col" id="projetos">
                <div className="flex flex-col">
                    <h1 className="lg:text-3xl text-2xl flex gap-4 font-bold">
                        <Image
                            src="/icon/send.svg"
                            alt="Icone de envio"
                            width={25}
                            height={25}
                            className="transform rotate-45"
                        />
                        Alguns projetos que já desenvolvi</h1>
                </div>
                <div className="grid z-40 grid-cols-1 md:grid-cols-2 lg:ml-10 mt-12 m-auto lg:m-0 lg:grid-cols-3 lg:w-96 gap-x-8 lg:gap-x-96 gap-y-8 lg:mt-12 ">
                    <CardProjetos
                        hrefGit="https://github.com/lazaroalvesr/Arruda_Bombas"
                        href="https://land-page-gym.vercel.app/"
                        src="/img/LandPage_GYM.png"
                        titulo="BestGym"
                        sobre="BestGym foi desenvolvido para apresentar os produtos e serviços que oferecemos, assim como as características exclusivas que tornam a nossa academia especial"
                        tec={["ReactJS", "Typescript", "NextJS", "Styled-Components"]}
                    />
                    <CardProjetos
                        href="https://stock-flow-front.vercel.app/"
                        hrefGit="https://github.com/lazaroalvesr/StockFlow_Front"
                        src="/img/stockFlow.png"
                        titulo="Stock Flow"
                        sobre="StockFlow é uma plataforma de gerenciamento de estoque com uma interface moderna que simplifica a organização e o controle de inventários. Proporcionando uma solução prática e segura para a gestão de inventário."
                        tec={["ReactJS", "Typescript", "NextJS", "Tailwind CSS"]}
                    />
                    <CardProjetos
                        href="https://github.com/lazaroalvesr/API_stockFlow"
                        hrefGit="https://github.com/lazaroalvesr/API_stockFlow"
                        src="/img/apiStockFlow.png"
                        titulo="Stock Flow API"
                        sobre="StockFlow API permite gerenciar inventários com facilidade, oferecendo funcionalidades para criar, editar, e excluir pastas e itens. Proporciona uma solução eficiente e segura para o controle de estoque."
                        tec={["NodeJS", "NestJS", "DDD", "Prisma", "PostgreSQL"]}
                    />
                    <CardProjetos
                        hrefGit="https://github.com/lazaroalvesr/Arruda_Bombas"
                        href="https://arrudabombas.com.br/"
                        src="/img/Arruda_Bombas.png"
                        titulo="Arruda Bombas"
                        sobre="Arruda Bombas exibe produtos e serviços da empresa, como bombas de concreto, e facilita o contato com clientes. O design é otimizado para uma navegação fácil e acessível."
                        tec={["ReactJS", "Typescript", "NextJS", "Styled-Components"]}
                    />
                     <CardProjetos
                        hrefGit="https://github.com/lazaroalvesr/LandPage_DrKarolina"
                        href="https://land-page-dr-karolina.vercel.app/"
                        src="/img/DrKarolina.png"
                        titulo="Dr Karolina"
                        sobre="Criei uma landing page responsiva para uma advogada, evidenciando seus serviços jurídicos. O design é elegante, profissional e focado em conversão."
                        tec={["ReactJS", "Typescript", "NextJS", "Styled-Components"]}
                    />
                </div>
            </div>
        </section>
    )
}