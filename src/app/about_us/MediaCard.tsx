import * as React from 'react';
import {Card, CardContent, CardMedia, Typography} from '@mui/material';

interface CardProps{
    n: string, 
    r: string,
    i: string
}

export default function MediaCard(props:CardProps) {
  return (
    <Card className="w-[50vw] md:w-[15vw]"  sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: "25vh" }}
        image={props.i}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.n}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.r}
        </Typography>
      </CardContent>
    </Card>
  );
}