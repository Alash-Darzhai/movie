export default function NextPageRequest(query, page) {
  const apiKey = '5f69dad7ee7876e6585d2f02aaa3968d';
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`
  ).then((response) => response.json());
}
