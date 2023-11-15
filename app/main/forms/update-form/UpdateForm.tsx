import { FormEvent, useState, ChangeEvent } from "react";

import { updateSneakers, deletSneakers } from "@/app/actions";

import Modal from "@/src/ui/modal/Modal";
import Input from "@/src/ui/input/Input";
import Button from "@/src/ui/button/Button";
import StarInput from "@/src/ui/input/star-input/StarInput";

import CloseIcon from "@/src/ui/icons/icons-24px/CloseIcon";

import styles from "./UpdateForm.module.css";

export default function UpdateForm({
  handleCloseModal,
  sneakersData,
}: {
  handleCloseModal: () => void;
  sneakersData: {
    id: string;
    name: string;
    brand: string;
    rating: number;
    year: number;
    size: number;
    price: number;
  };
}) {
  const { id, name, brand, rating, year, size, price } = sneakersData;

  const [nameVal, setName] = useState<string>(name);
  const [brandVal, setBrand] = useState<string>(brand);
  const [priceVal, setPrice] = useState<number>(price);
  const [sizeVal, setSize] = useState<number>(size);
  const [yearVal, setYear] = useState<number>(year);
  const [ratingVal, setRating] = useState<number>(rating);

  const [isEmpty, setIsEmpty] = useState<string[]>([]);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleBrandChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBrand(event.target.value);
  };

  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };

  const handleSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target) setSize(Number(event.target.value));
  };

  const handleYearChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target) setYear(Number(event.target.value));
  };

  const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target) setRating(Number(event.target.value));
  };

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = {
      name: nameVal.trim(),
      brand: brandVal.trim(),
      price: priceVal,
      size: sizeVal,
      year: yearVal,
      rating: ratingVal,
    };

    let isEmptyTmp: string[] = [];

    for (const inputType in data) {
      const value = data[inputType as keyof typeof data];
      if (!value) {
        isEmptyTmp.push(inputType);
      }
    }

    setIsEmpty(isEmptyTmp);

    if (isEmptyTmp.length === 0) {
      const reqStatus = await updateSneakers(data, id);

      if (reqStatus) {
        handleCloseModal();
      }
    }
  }

  async function handleDelete() {
    const reqStatus = await deletSneakers(id);

    if (reqStatus) {
      handleCloseModal();
    }
  }

  return (
    <Modal closeModal={handleCloseModal}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formHeader}>
          <h2>{name}</h2>
          <CloseIcon handleClick={handleCloseModal} />
        </div>
        <div className={styles.formInputs}>
          <div className={styles.formInputNormal}>
            <Input
              isIcon={false}
              Icon={() => <></>}
              handleInput={handleNameChange}
              placeholder=""
              label={"Name"}
              type={"text"}
              myValue={nameVal}
              isAlert={isEmpty.includes("name")}
            />
          </div>
          <div className={styles.formInputNormal}>
            <Input
              isIcon={false}
              Icon={() => <></>}
              handleInput={handleBrandChange}
              placeholder=""
              label={"Brand"}
              type={"text"}
              myValue={brandVal}
              isAlert={isEmpty.includes("brand")}
            />
          </div>
          <div className={styles.formInputNormal}>
            <Input
              isIcon={false}
              Icon={() => <></>}
              handleInput={handlePriceChange}
              placeholder=""
              label={"Price"}
              type={"number"}
              myValue={priceVal}
              isAlert={isEmpty.includes("price")}
            />
          </div>
          <div className={styles.formInputNormal}>
            <Input
              isIcon={false}
              Icon={() => <></>}
              handleInput={handleSizeChange}
              placeholder=""
              label={"Size US"}
              type={"number"}
              myValue={sizeVal}
              isAlert={isEmpty.includes("size")}
            />
          </div>
          <div className={styles.formInputNormal}>
            <Input
              isIcon={false}
              Icon={() => <></>}
              handleInput={handleYearChange}
              placeholder=""
              label={"Year"}
              type={"number"}
              myValue={yearVal}
              isAlert={isEmpty.includes("size")}
            />
          </div>
          <StarInput handleInput={handleRatingChange} myValue={ratingVal} />
        </div>
        <div className={styles.formActions}>
          <Button
            onClick={handleSubmit}
            type="primary"
            Icon={() => <></>}
            isIcon={false}
            iconPosition={"left"}
            size="large"
            label="Save"
            isActive={false}
          />
          <Button
            onClick={handleDelete}
            type="primary"
            Icon={() => <></>}
            isIcon={false}
            iconPosition={"left"}
            size="large"
            label="Delete"
            isActive={true}
          />
        </div>
      </form>
    </Modal>
  );
}
