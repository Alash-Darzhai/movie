export default function ApiRequest(text) {
  const apiKey = '5f69dad7ee7876e6585d2f02aaa3968d';
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${text}`
  )
    .then((res) => {
      if (res.ok) {
        return res;
      } else {
        let error = new Error(res.statusText);
        error.response = res;
        throw error;
      }
    })
    .then((res) => res.json());
}
