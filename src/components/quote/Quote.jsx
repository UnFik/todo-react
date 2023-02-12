import React, { useState, useEffect } from "react";

const Quote = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      setQuote(data[randomIndex]);
    }

    fetchData();
  }, []);

  return quote ? (
    <div className="mx-auto mt-10 text-center">
      <p>{quote.text}</p>
      <p>- {quote.author}</p>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Quote;
