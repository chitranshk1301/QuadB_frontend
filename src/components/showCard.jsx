import * as React from 'react';
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function showCard(props) {

    return (
        <Card sx={{ width: 345 }} key={props.key}>
            <Link to={`/show/${props.id}`}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="150"
                        image={props.image}
                        alt="show's image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className=''>
                            {props.name}
                        </Typography>
                        <hr
                            className="border-1 border-black w-full mb-4 -mt-2"
                        />
                        <Typography variant="body2" color="text.primary">
                            <>
                                <li><span className='font-extrabold underline'>Type:</span> {props.type}</li>
                                <li><span className='font-extrabold underline'>Rating:</span> {props.rating}</li>
                                <li><span className='font-extrabold underline'>Genre:</span> {props.genre}</li>
                                <li><span className='font-extrabold underline'>Language:</span> {props.language}</li>
                            </>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions>
                <Button size="small" color="primary">
                    <a href={props.link}>TVmaze link</a>
                </Button>
            </CardActions>
        </Card>
    );
}