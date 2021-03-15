import React from 'react';
import cn from './Grid.module.css';
function ArticleLayout(props) {
  return (
    <div className={cn.container}>
      <div>{props.left}</div>
      <div>{props.right}</div>
    </div>
  );
}

export default ArticleLayout;
