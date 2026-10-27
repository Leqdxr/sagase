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
      return <p className="py-8 text-center text-ink">Loading anime details....</p>
    }

    if (error) {
      return <p className="py-8 text-center text-ink">{error}</p>
    }

    if (!anime) {
      return null
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
    <div className="mx-auto max-w-4xl px-4 py-6 text-ink">
      <Link
        to="/"
        className="mb-4 inline-block rounded-lg border border-petal-rouge px-3 py-1 text-sm font-semibold hover:bg-soft-blush"
      >
        ← Back to search
      </Link>

      <div className="flex flex-col gap-6 md:flex-row">
        {posterImage?.large ? (
          <img
            src={posterImage.large}
            alt={canonicalTitle}
            className="w-full rounded-xl border border-cherry-blossom object-cover md:w-64 md:self-start"
          />
        ) : (
          <div className="flex aspect-[3/4] w-full items-center justify-center rounded-xl bg-pastel-pink md:w-64 md:self-start">
            No image
          </div>
        )}

        <div>
          <h1 className="text-2xl font-bold">{canonicalTitle}</h1>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full bg-pastel-pink px-3 py-1 text-xs font-semibold">
              {subtype}
            </span>
            <span className="rounded-full bg-pastel-pink px-3 py-1 text-xs font-semibold">
              {episodeCount ?? "?"} eps
            </span>
            <span className="rounded-full bg-pastel-pink px-3 py-1 text-xs font-semibold capitalize">
              {status}
            </span>
          </div>

          <p className="mt-4 whitespace-pre-line text-sm leading-relaxed">
            {synopsis ?? "No synopsis available."}
          </p>
        </div>
      </div>
    </div>
  );
}
