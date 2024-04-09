export const FetchData = () => {
  return fetch(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=29ed7e2bcc7f404a9eb642e288923a7e`
  ).then((res) => {
    return res.json();
  });
};
