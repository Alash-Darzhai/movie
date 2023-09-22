const apiKey = '5f69dad7ee7876e6585d2f02aaa3968d';

function StarRequestPost(id, valueRate) {
  const value = {
    value: valueRate,
  };

  localStorage.setItem(id, `${valueRate}`);
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/rating?api_key=${apiKey}&guest_session_id=${localStorage.getItem(
      "guest"
    )}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(value),
    }
  ).then((response) => response.json());
}

function GuestRequest() {
  return fetch(
    `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${apiKey}`
  )
    .then((response) => response.json())
    .then(
      (guestSession) =>
        !localStorage.getItem("guest") &&
        localStorage.setItem("guest", guestSession.guest_session_id)
    );
}

function StarRequestGet() {
  return fetch(
    `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
      "guest"
    )}/rated/movies?api_key=${apiKey}&language=en-US&sort_by=created_at.asc`
  ).then((response) => response.json());
}

function StarRequestGetNext(pageRate) {
  return fetch(
    `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
      "guest"
    )}/rated/movies?api_key=${apiKey}&language=en-US&sort_by=created_at.asc&page=${pageRate}`
  ).then((response) => response.json());
}

export {
  GuestRequest,
  StarRequestPost,
  StarRequestGet,
  StarRequestGetNext,
};
