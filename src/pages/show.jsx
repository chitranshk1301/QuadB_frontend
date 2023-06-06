import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Show = (props) => {
  const params = useParams()
  const [show, setShow] = useState([])
  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${params.id}`)
      .then((res) => {
        setShow(res.data)
      })
      // .then(() => {
      //     console.log(shows);
      // })
      .catch((err) => {
        console.log(err)
      })
  }, [show])

  return (
    <div>
      <div className='container mt-28 sm:mx-[11rem]'>
        <header className='sm:mx-[24.5em] sm:w-max text-2xl mb-16 -mt-16 font-semibold text-gray-400'>Click on the card to view more</header>
        <div className='flex flex-col items-center'>
          <div className='flex flex-row'>
            <img src={show.image?.medium} alt="" className='w-1/3' />
            <div className='flex flex-col'>
              <h1 className='text-4xl font-semibold'>{show.name}</h1>
              <h2 className='text-2xl font-semibold'>{show.type}</h2>
              <h3 className='text-xl font-semibold'>{show.genres?.slice(0, 3).join(', ')}</h3>
              <h3 className='text-xl font-semibold'>{show.language}</h3>
              <h3 className='text-xl font-semibold'>{show.rating?.average}</h3>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Show