import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

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

  const genres = show.genres?.map((genre, index) => {
    return (
      <p key={index} className="text-lg">{genre}</p>
    )
  })

  return (
    <div className="bg-gray-100 p-24 h-full mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="w-full h-full md:w-5/6 mr-20">
            <img src={show.image?.original} alt="Movie Poster" className="w-full rounded-lg mb-4" />
          </div>
          <div className="w-full md:w-2/3 md:pl-8">
            <h2 className="font-extrabold mb-4 text-6xl">{show.name}</h2>
            <hr
              className='border-2 border-gray-400 w-full mt-2 mb-2'
            />

            <div className="flex flex-row-6 gap-8 justify-center mb-4 text-xl ml-28">
              {/* Additional fields */}
              <div className="w-1/6">
                <p className="text-gray-600 mb-2 underline">Genre:</p>
                <p className="text-lg">
                  {genres}
                </p>
              </div>
              <div className="w-1/6">
                <p className="text-gray-600 mb-2 underline">Type:</p>
                <p className="text-lg">{show.type}</p>
              </div>
              <div className="w-1/6">
                <p className="text-gray-600 mb-2 underline">Language:</p>
                <p className="text-lg">{show.language}</p>
              </div>
              <div className="w-1/6">
                <p className="text-gray-600 mb-2 underline">Status:</p>
                <p className="text-lg">{show.status}</p>
              </div>
              <div className="w-1/6">
                <p className="text-gray-600 mb-2 underline">Runtime:</p>
                <p className="text-lg">{show.runtime}</p>
              </div>
              <div className="w-1/6">
                <p className="text-gray-600 mb-2 underline">Average Runtime:</p>
                <p className="text-lg">{show.averageRuntime}</p>
              </div>
              <div className="w-1/6">
                <p className="text-gray-600 mb-2 underline">Official site:</p>
                <Link className="text-lg text-blue-600" to={show.officialSite}>Click</Link>
              </div>
              <div className="w-1/6">
                <p className="text-gray-600 mb-2 underline">Rating:</p>
                <p className="text-lg">{show.rating?.average}</p>
              </div>
              <div className="w-1/6">
                <p className="text-gray-600 mb-2 underline">Premiered:</p>
                <p className="text-lg">{show.premiered}</p>
              </div>
            </div>
            {/* Additional fields */}
            <div className='mt-20'>
              <p className="text-gray-600 mb-2 text-4xl font-semibold">Summary:</p>
              <p className="text-2xl">{show.summary}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Show