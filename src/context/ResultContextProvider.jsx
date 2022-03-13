import React, { useContext, createContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (url) => {
    setIsLoading(true);

    const res = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-user-agent": "desktop",
        "x-proxy-location": "US",
        "x-rapidapi-key": "c2a42b6d56msh38aa1c128e4ed6fp154206jsn1e68146473a7",
      },
    });

      const data = await res.json();
      console.log(data)

    setResults(data);
    setIsLoading(false);
  };

  //   const getRetults = async (type) => {
  //     setIsLoading(true);
  //     const Response = await fetch(`${baseUrl}${type}`, {
  //       method: "GET",
  //       headers: {
  //         "x-user-agent": "desktop",
  //         "x-rapidapi-host": "google-search3.p.rapidapi.com",
  //         "x-rapidapi-key": "c2a42b6d56msh38aa1c128e4ed6fp154206jsn1e68146473a7",
  //       },
  //     });
  //     const data = await Response.json();
  //     // console.log(data);
  //     setResults(data);
  //     setIsLoading(false);
  //   };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
