import Image from "next/image";

import { HomeHeader, HomeSearch } from "./components";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          width={300}
          height={100}
          src={
            "https://www.google.ge/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
          }
          alt="google"
          className="select-none"
        />
        <HomeSearch />
      </div>
    </>
  );
}
