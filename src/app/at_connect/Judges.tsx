"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

interface Judge {
  id: number;
  name: string;
  bio: string;
  imagePath: string;
  role: string;
}

const judges: Judge[] = [
  {
    id: 1,
    name: "Doraemon",
    role: "Tech Innovation Lead",
    bio: "Former CTO with 15+ years experience in AI and machine learning. Passionate about mentoring young entrepreneurs.",
    imagePath: "/judges/doraemon.png"
  },
  {
    id: 2,
    name: "C. George",
    role: "Venture Capitalist",
    bio: "Partner at Future Ventures, specializing in early-stage startups. Has backed multiple unicorn companies.",
    imagePath: "/judges/george.webp"
  },
  {
    id: 3,
    name: "Ice Bear",
    role: "Research Director",
    bio: "Leading researcher in sustainable technology. Published author and frequent keynote speaker.",
    imagePath: "/judges/ice-bear.png"
  },
  {
    id: 4,
    name: "Crayon Shin-Chan",
    role: "Industry Expert",
    bio: "20+ years experience in product development. Former VP of Product at major tech companies.",
    imagePath: "/judges/shin-chan.jpg"
  }
];

export default function Judges() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our Judges</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our distinguished panel of judges brings decades of experience and expertise to evaluate and mentor participants.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {judges.map((judge) => (
            <Card key={judge.id} className="overflow-hidden bg-card hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square relative">
                <Image
                  src={judge.imagePath}
                  alt={judge.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-1 text-black">{judge.name}</h3>
                <p className="text-sm text-primary/80 mb-3">{judge.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {judge.bio}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}