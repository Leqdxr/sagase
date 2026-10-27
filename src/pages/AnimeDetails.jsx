import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export default function AnimeDetails() {
  const [anime, setAnime] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  const { animeId } = useParams()

  useEffect(() => {
    async function getAnimeById() {
      setLoading(true)
      setAnime(null)
      setError("")
      try {
        const response = await fetch(`https://kitsu.io/api/edge/anime/${animeId}`)
        if (!response.ok) {
          throw new Error("Something went wrong please try again later")
        }
        const data = await response.json()
        setAnime(data.data)
      }
      catch (err) {
        setError(err.message)
      }
      finally {
        setLoading(false)
      }
    }
    getAnimeById()
  }, [animeId])
  return (
    <>
      {loading ? (<p className="text-ink py-4 text-center">Loading Anime Details....</p>) :
        error ? (<p className="text-ink py-4 text-center">{error}</p>) :
        (
          <p>{anime.attributes.canonicalTitle}</p>
        )
      }
    </>
  );
}
