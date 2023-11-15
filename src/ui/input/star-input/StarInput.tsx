import { RefObject, useState } from "react";

import StarEmpty from "../../icons/icons-24px/StarEmpty";
import StartFilled from "../../icons/icons-24px/StarFilled";

import styles from "./StarInput.module.css";

export default function StarInput({
  myValue,
  handleInput,
}: {
  myValue: number;
  handleInput: (event: any) => void;
}) {
  const [rating, setRating] = useState(myValue);

  return (
    <>
      <label className={styles.inputLabel}>Rate</label>
      <div className={styles.rating}>
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label className={styles.starInput} key={index}>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => setRating(currentRating)}
                onChange={handleInput}
              />
              {currentRating <= rating ? (
                <StartFilled handleClick={() => ""} />
              ) : (
                <StarEmpty handleClick={() => ""} />
              )}
            </label>
          );
        })}
      </div>
    </>
  );
}
