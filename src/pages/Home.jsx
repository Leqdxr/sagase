import React from 'react';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { useEffect } from 'react';
import AnimeList from '../components/AnimeList';



export default function Home() {
  const [text, setText] = useState("")
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  function handleSearch(animeName) {
    setQuery(animeName);
  }

  useEffect(() => {
    async function getAnimeStats() {
      const response = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${query}`)
      const data = await response.json()
      setResults(data.data)
    }
    getAnimeStats()
  },
    [query])

  return (
    <>
      <SearchBar
        text={text}
        setText={setText}
        onSearch={handleSearch}
      />
      <AnimeList results={results} />
    </>
  );
}
