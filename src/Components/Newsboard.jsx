import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null); // For API errors

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const data = await res.json();
        setArticles(data.articles || []);
      } catch (err) {
        console.error("Failed to fetch news:", err);
        setError("Failed to load news. Please try again later.");
        setArticles([]); // Ensure it's an array to avoid `.map` crash
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div>
      <h2 className='text-center'>
        Latest <span className='badge bg-danger'>News</span>
      </h2>

      {error && <p className="text-center text-danger">{error}</p>}

      {articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      ) : !error ? (
        <p className="text-center">Loading articles...</p>
      ) : null}
    </div>
  );
};

export default Newsboard;

