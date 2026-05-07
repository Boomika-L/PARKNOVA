const BASE_URL = "http://localhost:8080";

export const postData = async (url, data, token = null) => {
  const res = await fetch(BASE_URL + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` })
    },
    body: JSON.stringify(data)
  });

  return res.json();
};

export const getData = async (url, token = null) => {
  const res = await fetch(BASE_URL + url, {
    headers: {
      ...(token && { Authorization: `Bearer ${token}` })
    }
  });

  return res.json();
};