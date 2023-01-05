import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="bg-blue-600 p-5">
      <div className="space-x-4">
        <Link className="px-2 py-1 bg-white text-blue-600" href="/">
          Home
        </Link>
        <Link className="px-2 py-1 bg-white text-blue-600" href="/search">
          Search
        </Link>
      </div>
    </header>
  );
}

export default Header;
