"use client";

import { Dispatch, useState } from "react";

import Button from "@/src/ui/button/Button";
import SearchBar from "@/src/ui/search-bar/SearchBar";
import PlusIcon from "@/src/ui/icons/icons-24px/PlusIcon";
import CreateForm from "../forms/create-form/CreateForm";

import styles from "./CollectionHeader.module.css";

export default function CollectionHeader({
  setSearchQ,
  searchQ,
}: {
  setSearchQ: Dispatch<string>;
  searchQ: string;
}) {
  const [isPopupVisible, setPopupVisibility] = useState(false);

  const handleChangeSearchQ = (event: any) => {
    setSearchQ(event.target.value);
  };

  return (
    <>
      {isPopupVisible && (
        <CreateForm
          handleCloseModal={() => setPopupVisibility(false)}
        />
      )}
      <header className={styles.collectionHeader}>
        <h1>Your collection</h1>
        <div className={styles.collectionHeaderActions}>
          <SearchBar handleChange={handleChangeSearchQ} searchValue={searchQ} />
          <Button
            onClick={() => setPopupVisibility(true)}
            isIcon={true}
            type={"primary"}
            Icon={PlusIcon}
            iconPosition={"left"}
            size={"large"}
            label={"Add new sneakers"}
            isActive={false}
          />
        </div>
      </header>
    </>
  );
}
