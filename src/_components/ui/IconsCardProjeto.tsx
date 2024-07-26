import Image from "next/image"
import Link from "next/link"

export const IconCard = ({ href, src }: { href: string, src: string }) => {
    return (
        <div>
            <Link href={href} target="_blank">
                <Image
                    src={src}
                    alt="Icone"
                    width={30}
                    height={30}
                />

            </Link>
        </div>
    )
}