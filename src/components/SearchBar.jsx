import React from 'react';

export default function SearchBar() {
  return (
    <>
      <div className="bg-papaya-whip px-4 py-8 text-center text-deep-space-blue">
        <div className="mb-4">
          <p className="text-2xl font-bold">Find your next anime</p>
          <p className="text-sm">Search Thousands of titles</p>
        </div>

        <div className="mx-auto flex max-w-xl items-center gap-2">
          <input type="text"
            placeholder="One Piece"
            className="flex-1 border border-steel-blue bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-steel-blue rounded-lg" />
          <button className="bg-brick-red cursor-pointer rounded-lg px-5 py-2 font-semibold text-papaya-whip hover:bg-molten-lava">Search</button>
        </div>
      </div>
    </>
  );
}
