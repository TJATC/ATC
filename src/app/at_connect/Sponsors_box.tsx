import Image from 'next/image'
interface BoxProps{
    name: string, 
    imageUrl: string,
    description: string,
    website: string
}

export default function sponsor_box(sponsor: BoxProps){
    return(<a href={sponsor.website}
        className="bg-white rounded-lg shadow-lg flex flex-col items-center w-fit transform transition-transform hover:scale-105 "
    >
        <div className="relative w-48 h-24 mb-4">
            <Image
                src={sponsor.imageUrl}
                alt={`${sponsor.name} logo`}
                fill={true}
                style={{ objectFit: "contain" }}
            />
        </div>
    </a>
    )
}