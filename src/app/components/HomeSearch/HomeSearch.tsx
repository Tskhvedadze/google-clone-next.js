"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { VoiceSearch } from "./components/VoiceSearch";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

type HomeSearchProps = {};

export const HomeSearch = ({}: HomeSearchProps) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    listening,
    transcript,
    browserSupportsSpeechRecognition,
    startListening,
    stopListening,
  } = VoiceSearch(setInput);
  const router = useRouter();

  function submitHandler(e: FormEvent<HTMLFormElement | HTMLButtonElement>) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }

  async function randomSearch() {
    setLoading(true);
    const res = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);

    if (!res) return;
    router.push(`/search/web?searchTerm=${res}`);

    setLoading(false);
  }

  if (!browserSupportsSpeechRecognition)
    console.warn("Browser does not support speech recognition.");

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          value={input || transcript}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="flex-grow focus:outline-none"
        />
        <BsFillMicFill
          className={`text-lg cursor-pointer ${
            !listening && "hover:text-gray-600"
          } active:text-gray-700 duration-200 ${listening && "text-red-300"}`}
          onClick={() => {
            !listening ? startListening() : stopListening();
          }}
        />
      </form>

      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
        <button type="submit" onClick={submitHandler} className="btn">
          Google Search
        </button>
        <button
          disabled={loading}
          onClick={randomSearch}
          className="btn flex items-center justify-center disabled:opacity-80"
        >
          {loading ? (
            <Image
              src="spinner.svg"
              width={60}
              height={60}
              alt="loading..."
              className="text-center"
            />
          ) : (
            "I Am Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
};
