import * as React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface CardProps {
  n: string;
  r: string;
  i: string;
}

export default function MediaCard(props: CardProps) {
  return (
    <Card
      className="flex flex-col w-full max-w-[300px] md:max-w-[400px] xl:max-w-[500px] mx-auto mb-4"
      sx={{ display: 'flex', flexDirection: 'column', height: '400px' }}
    >
      {/* Image with fixed height and object fit */}
      <CardMedia
        sx={{ height: "200px", objectFit: "cover" }}
        image={props.i}
        title="Profile Image"
      />

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
