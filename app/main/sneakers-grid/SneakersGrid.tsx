"use client";

import { useState, Dispatch, ReactElement } from "react";

import Button from "@/src/ui/button/Button";
import ProductCard from "@/src/ui/product-card/ProductCard";
import UpdateForm from "../forms/update-form/UpdateForm";

import Calendar from "@/src/ui/icons/icons-16px/Calendar";
import Size from "@/src/ui/icons/icons-16px/Size";
import Dollar from "@/src/ui/icons/icons-16px/Dollar";
import IconHotSneakers from "@/src/ui/icons/large/IconHotSneakers";

import styles from "./SneakersGrid.module.css";

type SneakerType = {
  _id: string;
  name: string;
  brand: string;
  rating: number;
  year: number;
  size: number;
  price: number;
};

export default function SneakersGrid({
  sneakers,
  searchQ,
}: {
  sneakers: SneakerType[];
  searchQ: string;
}) {
  const [sorter, setSorter] = useState("year");

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    brand: "",
    rating: 0,
    year: 0,
    size: 0,
    price: 0,
  });

  const handleSetFormData = (
    id: string,
    name: string,
    brand: string,
    rating: number,
    year: number,
    size: number,
    price: number
  ) => {
    setFormData({ id, name, brand, rating, year, size, price });
  };

  const handleCloseModal = () => {
    setFormData({
      id: "",
      name: "",
      brand: "",
      rating: 0,
      year: 0,
      size: 0,
      price: 0,
    });
  };

  const sortedSneakers = sneakers.sort(
    (sneakA: SneakerType, sneakB: SneakerType) => {
      const frstValue = sneakA[sorter as keyof SneakerType];
      const secondValue = sneakB[sorter as keyof SneakerType];
      return Number(frstValue) - Number(secondValue);
    }
  );

  const filteredSneakers: ReactElement[] = [];
  sortedSneakers.forEach((sneaker) => {
    const nameLower = sneaker.name.toLowerCase();
    if (nameLower.indexOf(searchQ.toLowerCase()) !== -1) {
      filteredSneakers.push(
        <ProductCard
          key={sneaker._id}
          id={sneaker._id}
          title={sneaker.name}
          brand={sneaker.brand}
          rating={sneaker.rating}
          year={sneaker.year}
          size={sneaker.size}
          price={sneaker.price}
          handleClick={handleSetFormData}
        />
      );
    }
  });

  let content;

  if (searchQ.length > 0 && filteredSneakers.length === 0) {
    content = (
      <div className={styles.noSneakersFound}>
        <IconHotSneakers />
        <p>
          Search better.
          <br />
          There is nothing like this in your collection.
        </p>
      </div>
    );
  } else {
    content = (
      <div className={styles.sneakersGridWrapper}>
        <div className={styles.gridActionsWrapper}>
          <span>Sort by:</span>
          <div className={styles.gridActions}>
            <Button
              onClick={() => setSorter("year")}
              type="secondary"
              isIcon={true}
              iconPosition={"left"}
              size={"small"}
              label="Oldest Year"
              Icon={Calendar}
              isActive={sorter === "year"}
            />
            <Button
              onClick={() => setSorter("size")}
              type="secondary"
              isIcon={true}
              iconPosition={"left"}
              size={"small"}
              label="Smallest Size"
              Icon={Size}
              isActive={sorter === "size"}
            />
            <Button
              onClick={() => setSorter("price")}
              type="secondary"
              isIcon={true}
              iconPosition={"left"}
              size={"small"}
              label="Lowest Price"
              Icon={Dollar}
              isActive={sorter === "price"}
            />
          </div>
        </div>
        <div className={styles.grid}>{filteredSneakers}</div>
      </div>
    );
  }

  return (
    <>
      {formData.id && (
        <UpdateForm
          handleCloseModal={handleCloseModal}
          sneakersData={formData}
          isOpen={!!formData.id}
        />
      )}
      {content}
    </>
  );
}
