import MediaCard from "./MediaCard"

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
    <div className="flex flex-wrap gap-[2em] mx-[5vw] justify-center">
      {leaders.map(({ name, role, image }, index) => (
        <MediaCard key={index} n={name} r={role} i={image} />
      ))}
    </div>
  )
}