import qs from "query-string";

export const useQueryParameters = () => {
  const params = qs.parse(window.location.search);

  const updateQueryParams = (queryParams) => {
    var newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "?" +
      queryParams;
    window.history.pushState({ path: newurl }, "", newurl);
  };

  return {
    params,
    updateQueryParams,
    qs,
  };
};
