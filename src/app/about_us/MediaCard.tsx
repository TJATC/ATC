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
    <div><p>hi</p></div>
    // <Card className="w-[50vw] md:w-[15vw]"  sx={{ maxWidth: 345 }}>
    //   <CardMedia
    //     sx={{ height: "25vh" }}
    //     image={props.i}
    //     title="green iguana"
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       {props.n}
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       {props.r}
    //     </Typography>
    //   </CardContent>
    // </Card>
  );
}