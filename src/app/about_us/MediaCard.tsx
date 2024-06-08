import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface CardProps{
    n: string, 
    r: string,
    i: string
}

export default function MediaCard(props:CardProps) {
  return (
    <Card className="w-[50vw] md:w-[15vw]"  sx={{ maxWidth: 345 }}>

    </Card>
  );
}