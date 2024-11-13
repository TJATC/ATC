import MediaCard from "./MediaCard";

interface Leader {
  name: string;
  role: string;
  image: string;
}

interface LeadershipProps {
  leaders: Leader[];
}

export default function Leadership({ leaders }: LeadershipProps) {
  return (
    <div className="relative px-4 py-8 max-w-7xl mx-auto">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="grid grid-flow-col auto-cols-[50%] lg:auto-cols-[25%] gap-4 snap-x snap-mandatory">
          {leaders.map(({ name, role, image }, index) => (
            <div key={index} className="snap-start w-full">
              <MediaCard n={name} r={role} i={image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

