import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
      <div className="bg-petal-rouge min-h-15 text-2xl text-white p-4 font-semibold grid grid-cols-3">
        <div className="text-ink">
        <Link to="/">Sagase</Link>
        </div>
        <div className="hidden text-center text-ink md:block">
          Search for your desired anime
        </div>
      </div>
    </>
  );
}
