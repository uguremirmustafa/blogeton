import React, { useEffect, useState } from 'react';
import SkeletonArticle from '../Skeletons/SkeletonArticle';
import SkeletonElement from '../Skeletons/SkeletonElement';

function Articles() {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setArticles(data);
    }, 5000);
  }, []);
  console.log(articles);
  return (
    <div>
      <h2>articles</h2>

      {articles &&
        articles.map((i) => {
          return (
            <div className="article" key={i.id}>
              <h3>{i.title}</h3>
              <p>{i.body}</p>
            </div>
          );
        })}
      {!articles &&
        [1, 2, 3, 4, 5, 1, 1, 1, 11].map((i) => <SkeletonArticle key={i} theme="light" />)}
    </div>
  );
}

export default Articles;
