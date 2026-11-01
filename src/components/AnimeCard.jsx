import React from 'react';
import { Link } from 'react-router-dom';

export default function AnimeCard({ anime }) {
  const { canonicalTitle, posterImage, subtype, episodeCount } = anime.attributes;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-cherry-blossom/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-petal-rouge hover:shadow-xl hover:shadow-petal-rouge/30">
      <Link to={`/anime-details/${anime.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden">
          {posterImage?.medium ? (
            <img
              src={posterImage.medium}
              alt={canonicalTitle}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-pastel-pink text-sm text-ink">
              No image
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {subtype && (
            <span className="absolute left-2 top-2 rounded-full bg-petal-rouge px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-ink shadow-md">
              {subtype}
            </span>
          )}
        </div>

        <div className="p-3">
          <h3
            title={canonicalTitle}
            className="truncate text-sm font-semibold text-ink transition-colors group-hover:text-ink/70"
          >
            {canonicalTitle}
          </h3>
          <p className="mt-1 text-xs text-ink/60">{episodeCount ?? '?'} episodes</p>
        </div>
      </Link>
    </article>
  );
}