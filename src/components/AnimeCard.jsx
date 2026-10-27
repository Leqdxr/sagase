import React from 'react';

export default function AnimeCard({ anime }) {
  const { canonicalTitle, posterImage, subtype, episodeCount } = anime.attributes;
  return (
      <div className="overflow-hidden rounded-xl border border-cherry-blossom bg-white hover:shadow-md transition relative">
      <img src={posterImage.medium} className="aspect-[3/4] w-full object-cover" alt={canonicalTitle} />
        <div className="p-2">
        <p className="truncate text-sm font-semibold text-ink">{canonicalTitle}</p>
        <p className="text-xs text-ink">{subtype} {episodeCount ?? "?"} eps</p>
        </div>
      </div>
  );
}
