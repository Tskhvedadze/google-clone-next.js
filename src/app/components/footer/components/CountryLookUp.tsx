"use client";

import { useState, useEffect } from "react";

type CountryLookUpProps = {};

export const CountryLookUp = ({}: CountryLookUpProps) => {
  const [country, setCountry] = useState("United States");

  useEffect(() => {
    fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setCountry(data?.country));
  }, []);

  return <>{country}</>;
};
