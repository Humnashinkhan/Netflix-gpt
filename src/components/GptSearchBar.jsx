import React, { useRef } from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';
import client from '../utils/openAi';

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang)
    const searchText = useRef(null);
    const handleGptSearchClick = async () => {
        console.log(searchText.current.value);
        // Make an API Call to Gpt API and get movie result.

        const gptQuery = "Act as a movie Recomendation System and suggest some movie for the query :" + searchText.current.value + " Only give me names of 5 movie, comma seperated like the example result given ahead. Example Results: Jigra, Don, Gadar, Crew, Koi mil Gaya";
    const gptResults = await client.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });
          console.log(gptResults.choices);
    };
  return (
    <div className="pt-[10%] flex justify-center">
        <form
        className="w-1/2 bg-black grid grid-cols-12" 
        onSubmit={(e) => e.preventDefault()}>
          <input 
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9" 
          placeholder={lang[langKey].gptSearchPlaceholder}
           />
          <button
           className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"onClick={handleGptSearchClick}
             Search >
           {lang[langKey].search}
        </button>
        </form>
    </div>
  )
};

export default GptSearchBar