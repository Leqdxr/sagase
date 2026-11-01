import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function AnimeDetails() {
  const [anime, setAnime] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const { animeId } = useParams();

  useEffect(() => {
    let ignore = false;
    async function getAnimeById() {
      setLoading(true);
      setAnime(null);
      setError("");
      try {
        const response = await fetch(
          `https://kitsu.io/api/edge/anime/${animeId}`,
        );
        if (!response.ok) {
          throw new Error("Something went wrong please try again later");
        }
        const data = await response.json();
        if (!ignore) setAnime(data.data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    getAnimeById();
    return () => {
      ignore = true;
    };
  }, [animeId]);

  if (loading) {
    return (
      <div className="flex flex-col items-center gap-4 py-24 text-ink">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-cherry-blossom border-t-petal-rouge" />
        <p className="text-sm font-medium text-ink/70">Loading anime details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto my-16 max-w-md rounded-2xl border border-dashed border-cherry-blossom bg-soft-blush/50 px-6 py-12 text-center text-ink">
        <p className="text-lg font-semibold">Could not load this anime</p>
        <p className="mt-1 text-sm text-ink/70">{error}</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-xl bg-petal-rouge px-5 py-2 text-sm font-semibold text-ink shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-cotton-candy hover:shadow-lg"
        >
          Back to search
        </Link>
      </div>
    );
  }

  if (!anime) {
    return null;
  }

  const {
    canonicalTitle,
    posterImage,
    subtype,
    episodeCount,
    status,
    synopsis,
  } = anime.attributes;

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 text-ink md:px-6">
      <Link
        to="/"
        className="group mb-8 inline-flex items-center gap-2 rounded-xl border border-petal-rouge bg-white px-4 py-2 text-sm font-semibold shadow-sm transition-all duration-200 hover:bg-soft-blush hover:shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
        >
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
        Back to search
      </Link>

      <div className="flex flex-col gap-8 md:flex-row">
        <div className="w-full shrink-0 md:w-72 md:self-start">
          {posterImage?.large ? (
            <img
              src={posterImage.large}
              alt={canonicalTitle}
              className="w-full rounded-2xl border border-cherry-blossom/60 object-cover shadow-xl shadow-petal-rouge/30"
            />
          ) : (
            <div className="flex aspect-[3/4] w-full items-center justify-center rounded-2xl border border-cherry-blossom/60 bg-pastel-pink text-sm shadow-xl shadow-petal-rouge/30">
              No image
            </div>
          )}
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            {canonicalTitle}
          </h1>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-petal-rouge px-3.5 py-1 text-xs font-bold uppercase tracking-wide shadow-sm">
              {subtype}
            </span>
            <span className="rounded-full bg-pastel-pink px-3.5 py-1 text-xs font-semibold ring-1 ring-cherry-blossom/60">
              {episodeCount ?? "?"} episodes
            </span>
            <span className="rounded-full bg-pastel-pink px-3.5 py-1 text-xs font-semibold capitalize ring-1 ring-cherry-blossom/60">
              {status}
            </span>
          </div>

          <div className="mt-6 rounded-2xl border border-cherry-blossom/60 bg-soft-blush/50 p-5 md:p-6">
            <h2 className="mb-2 text-sm font-bold uppercase tracking-wider text-ink/70">
              Synopsis
            </h2>
            <p className="whitespace-pre-line text-sm leading-relaxed md:text-base md:leading-7">
              {synopsis ?? "No synopsis available."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}