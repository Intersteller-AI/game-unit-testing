export const FetchData = () => {
  return fetch(
    `https://newsapi.org/v2/top-headlines?country=in&page=2&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  ).then((res) => {
    return res.json();
  });
};
