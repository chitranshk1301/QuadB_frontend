import * as React from 'react';
import Item from '@mui/material/ListItem';
import { useState, useEffect } from 'react'
import ShowCard from './showCard'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';

function ShowsList(props) {
    const [shows, setShows] = useState([])

    useEffect(() => {
        axios.get(`https://api.tvmaze.com/search/shows?q=all`)
            .then((res) => {
                setShows(res.data)
            })
            // .then(() => {
            //     console.log(shows);
            // })
            .catch((err) => {
                console.log(err)
            })
    }, [shows])

    function handleclick() {
        <Link to={{ pathname: "https://github.com/chitranshk1301" }} />
    }

    return (
        <div className='container mt-28 sm:mx-[11rem]'>
            <header className='sm:mx-[24.5em] sm:w-max text-2xl mb-16 -mt-16 font-semibold text-gray-400'>Click on the card to view more</header>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    '& > :not(style)': { m: 12, width: 320, height: 450 },
                }}
            >
                {shows.map((show) => {
                    return (
                        <Item key={show.show.id}>
                            <ShowCard
                                name={show.show.name}
                                image={show.show.image.medium}
                                type={show.show.type}
                                rating={show.show.rating.average}
                                genre={show.show.genres.slice(0, 3)}
                                language={show.show.language}
                                link={show.show.url}
                                onClick={handleclick()}
                            />
                        </Item>)
                })}
            </Box>
        </div>
    )
}

export default ShowsList