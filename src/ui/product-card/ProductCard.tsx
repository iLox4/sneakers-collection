import { deletSneakers } from "@/app/actions";

import Trash from "../icons/icons-24px/Trash";
import StarEmptySmall from "../icons/icons-16px/StarEmptySmall";
import StarFilledSmall from "../icons/icons-16px/StarFlledSmall";

import styles from "./ProductCard.module.css";

export default function ProductCard({
  id,
  title,
  brand,
  rating,
  year,
  size,
  price,
  handleClick,
}: {
  id: string;
  title: string;
  brand: string;
  rating: number;
  year: number;
  size: number;
  price: number;
  handleClick: (
    id: string,
    title: string,
    brand: string,
    rating: number,
    year: number,
    size: number,
    price: number
  ) => void;
}) {
  return (
    <div className={styles.productCard}>
      <div className={styles.header}>
        <div
          className={styles.headerLeft}
          onClick={() =>
            handleClick(id, title, brand, rating, year, size, price)
          }
        >
          <div className={styles.headerText}>
            <h3>{title}</h3>
            <label className={styles.cardLabel}>{brand}</label>
          </div>
          <div className={styles.headerStars}>
            {[...Array(5)].map((star, index) =>
              index < rating ? (
                <StarFilledSmall key={index} />
              ) : (
                <StarEmptySmall key={index} />
              )
            )}
          </div>
        </div>
        <button
          className={styles.iconWrapper}
          onClick={async () => await deletSneakers(id)}
        >
          <Trash />
        </button>
      </div>
      <div
        className={styles.productInfo}
        onClick={() => handleClick(id, title, brand, rating, year, size, price)}
      >
        <div className={styles.productInfoLeft}>
          <h4>{year}</h4>
          <label className={styles.cardLabel}>Year</label>
        </div>
        <div className={styles.productInfoSeparater}></div>
        <div className={styles.productInfoMiddle}>
          <h4>{size}</h4>
          <label className={styles.cardLabel}>Size US</label>
        </div>
        <div className={styles.productInfoSeparater}></div>
        <div className={styles.productInfoRight}>
          <h4>{price}</h4>
          <label className={styles.cardLabel}>Price</label>
        </div>
      </div>
    </div>
  );
}
