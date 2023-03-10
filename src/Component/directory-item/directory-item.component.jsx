import React from 'react'
import "./directory-item.styles.scss";

export default function DirectoryItem({ category }) {
    const {imageUrl, title, id} = category;
  return (
    <div className="directory-item-container" key={id}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}