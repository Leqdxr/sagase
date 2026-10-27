import React from 'react';
import AnimeCard from './AnimeCard';

export default function AnimeList({ results = [] }) {
  if (results === null) {
    return null
  }
  if (results.length === 0) {
    return <div className="text-center">No results found</div>
  }
  const anime = results.map((animeList) => {
    return <AnimeCard anime={animeList} key={animeList.id} />
  })
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 p-4 md:grid-cols-4">
      {anime}
    </div>
  );
}
