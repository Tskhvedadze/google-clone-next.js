"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: any;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-4xl mb-4 text-red-300">Something went wrong</h1>
      <button className="text-blue-500" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
