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
  }, [show, params.id])

  return (
    <div>
      <div className='container mt-28 sm:mx-[11rem] mb-28 p-20 w-5/6 h-5/6 detail'>
        <div className='flex flex-col items-center'>
          <div className='flex flex-row'>
            <img src={show.image?.original} alt="show-img" className='w-1/3' />
            <div className='flex flex-col ml-32'>
              <h1 className='text-5xl font-semibold'>{show.name}</h1>
              <hr 
                className='border-2 border-gray-400 w-1/2 mt-2 mb-2'
              />
              <h2 className='text-2xl font-semibold'><span className='font-extrabold underline'>Genre:   </span> {show.genres}</h2>
              <h3 className='text-xl font-semibold'><span className='font-extrabold underline'>Type:     </span>  {show.type}</h3>
              <h3 className='text-xl font-semibold'><span className='font-extrabold underline'>Language: </span>  {show.language}</h3>
              <h3 className='text-xl font-semibold'><span className='font-extrabold underline'>Status:   </span>  {show.status}</h3>
              <h3 className='text-xl font-semibold'><span className='font-extrabold underline'>Runtime:   </span>  {show.runtime}</h3>
              <h3 className='text-xl font-semibold'><span className='font-extrabold underline'>Average Runtime: </span>  {show.averageRuntime}</h3>
              <h3 className='text-xl font-semibold'><span className='font-extrabold underline'>Premiered:     </span>  {show.premiered}</h3>
              <h3 className='text-xl font-semibold'><span className='font-extrabold underline'>Official site:     </span>  {show.officialSite}</h3>
              <h3 className='text-xl font-semibold'><span className='font-extrabold underline'>Rating:    </span>  {show.rating?.average}</h3>
              <h3 className='text-xl font-semibold underline'><span className='font-extrabold underline'>Summary:    </span></h3>
              <h4 className='text-xl font-semibold'>{show.summary}</h4>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Show