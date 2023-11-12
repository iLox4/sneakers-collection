"use client";

import { useState } from "react";

import Button from "@/src/ui/button/Button";
import SearchBar from "@/src/ui/search-bar/SearchBar";
import PlusIcon from "@/src/ui/icons/icons-24px/PlusIcon";
import Modal from "@/src/ui/modal/Modal";

import styles from "./CollectionHeader.module.css";

export default function CollectionHeader() {
  const [isPopupVisible, setPopupVisibility] = useState(false);

  return (
    <>
      {isPopupVisible && (
        <Modal closeModal={() => setPopupVisibility(false)}>
          <h3>Add Sneakers</h3>
        </Modal>
      )}
      <header className={styles.collectionHeader}>
        <h1>Your collection</h1>
        <div className={styles.collectionHeaderActions}>
          <SearchBar />
          <Button
            onClick={() => setPopupVisibility(true)}
            isIcon={true}
            type={"primary"}
            Icon={PlusIcon}
            iconPosition={"left"}
            size={"large"}
            label={"Add new sneakers"}
          />
        </div>
      </header>
    </>
  );
}
