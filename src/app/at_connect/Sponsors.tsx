import Image from "next/image";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ['200', '400', '500', '600', '700'] });

interface Sponsor {
    name: string;
    imageUrl: string;
    description?: string;
    website?: string;
}

const sponsors: Sponsor[] = [
    {
        name: "SafeInHome",
        imageUrl: "/sponsors/safeinhome.png", // Update this with your actual image path
        description: "Our first sponsor!",
        website: "https://safeinhome.com"
    }
];

export default function SponsorsPage() {
    return (
        <div className={['sponsors-page', montserrat.className].join(' ')} style={{ minHeight: '400px' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold text-center mb-12" style={{ color: 'black' }}>Our Sponsors</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sponsors.map((sponsor, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
                            style={{ border: '1px solid blue' }}
                        >
                            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'black' }}>{sponsor.name}</h2>
                            <div className="relative w-full h-48 mb-4" style={{ border: '1px solid green' }}>
                                <Image
                                    src={sponsor.imageUrl}
                                    alt={`${sponsor.name} logo`}
                                    fill={true}
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                            {sponsor.description && (
                                <p className="text-gray-600 text-center mb-4">
                                    {sponsor.description}
                                </p>
                            )}
                            {sponsor.website && (
                                <a
                                    href={sponsor.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-pale-color w-fit p-4 rounded-xl text-black-color font-bold"
                                >
                                    Visit Website
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}