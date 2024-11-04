import Image from "next/image";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ['200', '400', '500', '600', '700'] });

interface Sponsor {
    name: string;
    imageUrl: string;
    description?: string;
    website?: string;
    tier: 'gold' | 'silver' | 'bronze' | 'booth';
}

const sponsors: Sponsor[] = [
    {
        name: "SafeInHome",
        imageUrl: "/sponsors/safeinhome.png",
        description: "Our first sponsor!",
        website: "https://safeinhome.com",
        tier: 'booth'
    }
    // Add more sponsors here with their respective tiers
];

<<<<<<< HEAD
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
=======
const TierSection = ({ title, backgroundColor, sponsors: tierSponsors }: { 
    title: string, 
    backgroundColor: string, 
    sponsors: Sponsor[] 
}) => (
    <div className="w-full mb-16" style={{ backgroundColor, padding: '2rem 0' }}>
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
            {tierSponsors.map((sponsor, index) => (
                <div 
                    key={index} 
                    className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transform transition-transform hover:scale-105"
                >
                    <h3 className="text-2xl font-semibold mb-4 text-black">{sponsor.name}</h3>
                    <div className="relative w-full h-48 mb-4">
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
                            className="bg-pale-color w-fit p-4 rounded-xl text-black-color font-bold hover:opacity-80"
>>>>>>> c108f3c (Added tiers for sponsors)
                        >
                            Visit Website
                        </a>
                    )}
                </div>
            ))}
        </div>
    </div>
);

export default function SponsorsPage() {
    const goldSponsors = sponsors.filter(s => s.tier === 'gold');
    const silverSponsors = sponsors.filter(s => s.tier === 'silver');
    const bronzeSponsors = sponsors.filter(s => s.tier === 'bronze');
    const boothSponsors = sponsors.filter(s => s.tier === 'booth');

    return (
        <div className={['sponsors-page', montserrat.className].join(' ')}>
            <div className="py-12">
                <h1 className="text-4xl font-bold text-center mb-12 text-black">Our Sponsors</h1>
                
                <TierSection 
                    title="Gold Tier" 
                    backgroundColor="#FFD700" 
                    sponsors={goldSponsors} 
                />
                
                <TierSection 
                    title="Silver Tier" 
                    backgroundColor="#C0C0C0" 
                    sponsors={silverSponsors} 
                />
                
                <TierSection 
                    title="Bronze Tier" 
                    backgroundColor="#CD7F32" 
                    sponsors={bronzeSponsors} 
                />

                <TierSection 
                    title="Booth Tier" 
                    backgroundColor="#FFE55C" 
                    sponsors={boothSponsors} 
                />
            </div>
        </div>
    );
}