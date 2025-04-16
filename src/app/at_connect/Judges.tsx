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
    name: "Derrick Fowles",
    role: "Judge",
    bio: "Derrick Fowles is a visionary leader and passionate advocate for diversity, inclusion, and equity, focusing on empowering individuals with disabilities. Pursuing his MBA, Derrick brings experience from his role as the Accessible Materials Coordinator in the student disability office, where he has showcased exceptional leadership by organizing large-scale events and implementing innovative solutions. His pursuit of the CPACC disability certification underscores his commitment to understanding diversity and inclusion. As a member of the GSA leadership at Virginia Tech, Derrick's unique experiences, strategic thinking skills, and dedication to promoting equal opportunities enable him to make a lasting, positive impact on the graduate population, fostering an inclusive environment where every student can thrive and reach their full potential.",
    imagePath: "/judges/derrick-fowles.jpg"
  },
  {
    id: 2,
    name: "Rachel Brady",
    role: "Judge",
    bio: "Rachel Brady, PT, DPT, MS is a physical therapist and assistant professor at the Georgetown University, Center for Child and Human Development (GUCCHD).  Dr. Brady is also the director of the Georgetown University Certificate in Early Intervention Program in the School of Continuing Studies. She has over 30 years of experience in inclusive early childhood and intervention services and over 20 years in interdisciplinary early childhood personnel training and related research. Dr. Brady has publications and presents in the areas of assistive technology, including and serving children with disabilities and complex needs in early educational settings, and training and education in early childhood intervention.",
    imagePath: "/judges/rachel-brady.jpg"
  },
  {
    id: 3,
    name: "Geoffrey P. Weber",
    role: "Judge",
    bio: "Geoffrey P. Weber, MEd, from George Mason University, is an Assistive Technology Coordinator at the Region 4 Training and Technical Assistance Center.",
    imagePath: "/judges/geoffrey-weber.jpg"
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