import { useContext } from "react";
import DetailsContext from "../context/details_context";

const ImgGrid = () => {
  const { product } = useContext(DetailsContext);

  if (!product.url_image) return null;

  return (
    <div className="details__img_grid">
      <figure
        className={
          product.url_image.length === 1
            ? "gallery__item gallery__item-oneitem"
            : "gallery__item gallery__item--1"
        }
      >
        {product.url_image[0] && (
          <img
            src={product.url_image[0]}
            className="gallery__img"
            alt="Image 1"
          />
        )}
      </figure>
      <figure className="gallery__item gallery__item--2">
        {product.url_image[1] && (
          <img
            src={product.url_image[1]}
            className="gallery__img"
            alt="Image 1"
          />
        )}
      </figure>
      <figure className="gallery__item gallery__item--3">
        {product.url_image[2] && (
          <img
            src={product.url_image[2]}
            className="gallery__img"
            alt="Image 1"
          />
        )}
      </figure>
    </div>
  );
};

export default ImgGrid;
