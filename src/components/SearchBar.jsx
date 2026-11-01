import React from 'react';

export default function SearchBar({ text, setText, onSearch }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(text);
  }

  return (
    <section className="bg-gradient-to-b from-soft-blush to-white px-4 py-12 text-center text-ink">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          Find your next anime
        </h1>
        <p className="mt-2 text-sm text-ink/70 md:text-base">
          Search thousands of titles
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-xl items-center gap-2 rounded-2xl border border-cherry-blossom/60 bg-white p-2 shadow-lg shadow-petal-rouge/20 transition-shadow duration-200 focus-within:shadow-xl focus-within:ring-2 focus-within:ring-cherry-blossom"
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="One Piece"
          className="min-w-0 flex-1 bg-transparent px-3 py-2 text-base placeholder:text-ink/40 focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 cursor-pointer rounded-xl bg-petal-rouge px-6 py-2 font-semibold text-ink shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-cotton-candy hover:shadow-lg active:translate-y-0 active:scale-95"
        >
          Search
        </button>
      </form>
    </section>
  );
}