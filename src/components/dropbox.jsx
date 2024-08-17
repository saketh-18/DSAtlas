import React, { useState } from "react";
import CodeBlock from "./codemirror";
import Textarea from "./Textarea";

export default function Dropbox({ title, description, tags, difficulty }) {
  const [visible, setVisible] = useState(false);
  const [clickTag1, setClickTag1] = useState(false);
  const [clickTag2, setClickTag2] = useState(false);
  const [clickTag3, setClickTag3] = useState(false);
  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const handleSaveNotes = () => {};
  return (
    <div className="shadow-2xl">
      <div className="visible-div flex flex-col  bg-white m-2">
        <div className="flex justify-between items-center">
          <p
            className={`text-primary-500  font-semibold ${
              visible ? "text-3xl mt-2 ml-4" : "mx-2 text-xl"
            }`}
          >
            {title}
          </p>
          <div className="flex items-center gap-2">
            <p
              className={`${
                difficulty === "easy"
                  ? "text-primary-500 bg-green-100 rounded px-3 py-1 text-large"
                  : difficulty === "medium"
                  ? "text-orange-500 bg-orange-100 rounded px-3 py-1 text-large"
                  : difficulty === "hard"
                  ? "text-red-500 bg-red-100 rounded px-3 py-1 text-large"
                  : ""
              }`}
            >
              {difficulty}
            </p>

            <button
              className="px-2 py-1 rounded-md bg-primary-100 text-primary-500 m-2  text-2xl"
              onClick={toggleDropdown}
            >
              {visible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {visible && (
          <div className="dropdown-menu w-full  rounded-md flex h-max">
            <div className="dropdown-content px-4 py-2 w-1/2  flex-col flex">
              <p className="text-zinc-700 text-lg font-semibold">
                Points For Solving : 800
              </p>
              <p className=" text-zinc-700 text-lg">{description}</p>
              <div className="notes-section">
                <Textarea placeholder="Take Notes here..." className="mt-5" />
                <button
                  className="px-4 py-2 rounded-md bg-primary-500 text-white"
                  onClick={handleSaveNotes}
                >
                  Save
                </button>
              </div>
              <div className="tags-section">
                <p className="text-zinc-700 text-xl font-semibold mt-3 mb-2">
                  Mark for revisit :{" "}
                </p>
                <div className=" w-max flex gap-2">
                  <p
                    className="px-4 py-2 rounded-md mb-3 text-lg cursor-pointer transition-colors duration-300 transform hover:scale-105 bg-emerald-500 text-white hover:bg-blue-500 active:bg-blue-700"
                    onClick={() => {
                      setClickTag1(!clickTag1);
                    }}
                  >
                    Hard
                  </p>
                  <p
                    className="px-4 py-2 rounded-md mb-3 text-lg cursor-pointer transition-colors duration-300 transform hover:scale-105 bg-emerald-500 text-white hover:bg-blue-500 active:bg-blue-700"
                    onClick={() => {
                      setClickTag2(!clickTag2);
                    }}
                  >
                    revise
                  </p>
                  <p
                    className="px-4 py-2 rounded-md mb-3 text-lg cursor-pointer transition-colors duration-300 transform hover:scale-105 bg-emerald-500 text-white hover:bg-blue-500 active:bg-blue-700"
                    onClick={() => {
                      setClickTag3(!clickTag3);
                    }}
                  >
                    optimal
                  </p>
                </div>
              </div>
              <div>
                <label>Topic : </label>
                <p className="text-xs">{tags}</p>
              </div>
            </div>
            <div className="w-1/2 flex flex-col m-2">
              <p>Enter your code here</p>
              <CodeBlock />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
