import React from 'react';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { useEffect } from 'react';
import AnimeList from '../components/AnimeList';

export default function Home() {
  const [text, setText] = useState("")
  const [query, setQuery] = useState("")
  const [results, setResults] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  function handleSearch(animeName) {
    setQuery(animeName);
  }

  useEffect(() => {
    let ignore = false
    async function getAnimeStats() {
      try {
        setLoading(true)
        setError("")
        const response = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${encodeURIComponent(query)}`)
        if (!response.ok) {
          throw new Error("Failed to fetch anime, please try again")
        }

        const data = await response.json()
        if (!ignore) setResults(data.data)
      }
      catch (err) {
        if (!ignore) {
          setError(err.message)
          setResults([])
        }

      }
      finally {
        if (!ignore) setLoading(false)
      }
    }
    getAnimeStats()
    return () => {
      ignore = true
    }
  },
    [query])

  return (
    <>
      <SearchBar
        text={text}
        setText={setText}
        onSearch={handleSearch}
      />

      {loading ? (<p className="py-8 text-center">Loading Anime....</p>) :
        error ? (<p className="py-8 text-center">{error}</p>) : (<AnimeList results={results} />)}
    </>
  );
}
