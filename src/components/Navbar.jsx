import React, { useState } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full flex justify-between items-center bg-white h-20 shadow-lg">
      <div className="logo-section">
        <p className="text-primary-500 text-4xl font-semibold mx-4">
          {"<DSAtlas/>"}
        </p>
      </div>
      <div className="search-bar bg-primary-100 w-1/3 flex items-center justify-between rounded-md">
        <input
          className="focus:outline-none p-3  rounded-md bg-transparent w-full placeholder:text-primary-500 placeholder:text-lg"
          type="search"
          placeholder="search here..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="green"
            className="size-6 mr-2 hover:cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center justify-between w-1/3">
        <p className="text-primary-500 text-xl font-semibold mx-2">Explore</p>
        <p className="text-primary-500 text-xl font-semibold mx-2">About Us</p>
        <p className="text-primary-500 text-xl font-semibold mx-2">
          Contact Us
        </p>
        <p className="text-primary-500 text-xl font-semibold mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </p>
      </div>
    </div>
  );
}
