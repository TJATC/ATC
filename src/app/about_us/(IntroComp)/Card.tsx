import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface CardProps{
    name: string, 
    role: string,
}

export default function MediaCard(props:CardProps) {
  return (
    <Card className="w-[20vw]"  sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/1.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.role}
        </Typography>
      </CardContent>
    </Card>
  );
}