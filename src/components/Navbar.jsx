import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-petal-rouge shadow-lg shadow-black/10">
      <nav className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-4">
        <Link
          to="/"
          className="group flex items-center gap-3 text-2xl font-extrabold tracking-wide text-ink transition-transform duration-200 hover:scale-105"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/30 text-xl ring-1 ring-white/50 transition-transform duration-200 group-hover:rotate-6">
            桜
          </span>
          Sagase
        </Link>

        <p className="hidden text-center text-lg font-medium tracking-wide text-ink/80 md:col-start-2 md:block">
          Search for your desired anime
        </p>
      </nav>
    </header>
  );
}