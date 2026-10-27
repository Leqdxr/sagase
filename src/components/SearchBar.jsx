import React from 'react';

export default function SearchBar({ text, setText, onSearch }) {

  function handleSubmit() {
    onSearch(text)
  }

  return (
    <>
      <div className="bg-soft-blush px-4 py-8 text-center text-ink">
        <div className="mb-4">
          <p className="text-2xl font-bold">Find your next anime</p>
          <p className="text-sm">Search Thousands of titles</p>
        </div>

        <div className="mx-auto flex max-w-xl items-center gap-2">
          <input type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="One Piece"
            className="min-w-0 flex-1 rounded-lg border border-cherry-blossom bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cherry-blossom" />
          <button
            className="shrink-0 cursor-pointer rounded-lg bg-petal-rouge px-4 py-2 font-semibold text-ink hover:bg-cotton-candy"
            onClick={handleSubmit}
          >Search</button>
        </div>
      </div>
    </>
  );
}
