import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
    <div className="absolute -z-10">
      <img
      className="h-screen object-cover md:h-auto md:object-contain"
        src={BG_URL}
        alt="logo"
        />
    </div>
    <div className="">
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
    </>
  )
}

export default GptSearch