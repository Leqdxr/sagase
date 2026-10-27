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
    <div className="p-4 mx-auto grid grid-cols-4 max-w-5xl gap-3 px-4">
      {anime}
    </div>
  );
}
