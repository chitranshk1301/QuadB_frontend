import * as React from 'react';
import Item from '@mui/material/ListItem';
import { useState, useEffect } from 'react'
import ShowCard from '../components/showCard'
import axios from 'axios'
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


    return (
        <div className='container mt-28 sm:mx-[11rem]'>
            <p className='sm:mx-[24.5em] sm:w-max text-2xl mb-16 -mt-16 font-semibold text-gray-400'>Click on the card to view more</p>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    rowGap: 14,
                    alignItems: 'center',
                    '& > :not(style)': { m: 12, width: 320, height: 450 },
                }}
            >
                {shows.map((show) => {
                    return (
                        <Item key={show.show.id}>
                            <ShowCard
                                id={show.show.id}
                                name={show.show.name}
                                image={show.show.image?.medium}
                                type={show.show.type}
                                rating={show.show.rating.average}
                                genre={show.show.genres.slice(0, 3)}
                                language={show.show.language}
                                link={show.show.url}
                                self_link={show.show._links.self.href}
                            />
                        </Item>
                        )
                })}
            </Box>
        </div>
    )
}

export default ShowsList