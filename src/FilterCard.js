import * as React from 'react';
import {Box, Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';

export default function FilterCard(props) {
  return (
    <Box sx={{ minWidth: '50rem', display: 'inline-block'}}>
      <Card variant="outlined">
    <CardContent>
      <Typography variant="h6" color="text.secondary" gutterBottom>
      {props.title}
      </Typography>
      <Typography sx={{ fontSize: 20 }} component="div">
      {props.description}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      {props.price}
      </Typography>
      <Typography variant="body2">
        bid count : {props.bidCount}
        <br />
      </Typography>
      <Typography variant="body2" color="blue">
      {props.skills}
        <br />
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">bid now</Button>
    </CardActions>
      </Card>
    </Box>
  );
}