import React from 'react';
import AnimeCard from './AnimeCard';

export default function AnimeList({ results = [] }) {
  if (results === null) {
    return null;
  }

  if (results.length === 0) {
    return (
      <div className="mx-auto my-16 max-w-md rounded-2xl border border-dashed border-cherry-blossom bg-soft-blush/50 px-6 py-12 text-center text-ink">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto h-12 w-12 text-ink/60"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <p className="mt-3 text-lg font-semibold">No results found</p>
        <p className="mt-1 text-sm text-ink/70">Try a different title or check the spelling</p>
      </div>
    );
  }

  const anime = results.map((animeList) => {
    return <AnimeCard anime={animeList} key={animeList.id} />;
  });

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
        {anime}
      </div>
    </section>
  );
}