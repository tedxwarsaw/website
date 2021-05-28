import { useState, useEffect } from "react";
import qs from "query-string";

export const useQueryParameters = () => {
  const [params, setParams] = useState({});

  useEffect(() => {
    const queryParams = qs.parse(window?.location.search);
    setParams(queryParams);
  }, []);

  const updateQueryParams = (queryParams) => {
    var newurl =
      window?.location.protocol +
      "//" +
      window?.location.host +
      window?.location.pathname +
      "?" +
      queryParams;
    window?.history.pushState({ path: newurl }, "", newurl);
  };

  return {
    params,
    updateQueryParams,
    qs,
  };
};
