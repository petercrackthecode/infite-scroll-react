import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ScrollComponent() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [prevY, setPrevY] = useState(0);

  const getPhotos = async (page) => {
    setLoading({ loading: true });
    const URL = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`;
    try {
      const { data } = await axios.get(URL);
      setPhotos({ ...photos, ...data.photos });
      setLoading(false);
    } catch (error) {
      alert("We're having an error");
    }
  };

  useEffect(() => getPhotos());

  return <div className="container"></div>;
}
