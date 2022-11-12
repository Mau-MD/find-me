import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const SearchFilters = () => {
  const { data: breeds } = useQuery(["breeds"], async () => {
    const res = await axios.get("https://dog.ceo/api/breeds/list/all ");
    return Object.keys(res.data.message);
  });
  return <div>{JSON.stringify(breeds)}</div>;
};

export default SearchFilters;
