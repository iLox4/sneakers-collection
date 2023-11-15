"use client";

import { useEffect, useState } from "react";

import IconHotTrending from "@/src/ui/icons/large/IconHotTrending";
import CollectionHeader from "./collection-header/CollectionHeader";
import SneakersGrid from "./sneakers-grid/SneakersGrid";

import styles from "./main.module.css";

type SneakerType = {
  _id: string;
  name: string;
  brand: string;
  rating: number;
  year: number;
  size: number;
  price: number;
};

export default function CollectionContent({
  sneakersData,
}: {
  sneakersData: SneakerType[];
}) {
  const [sneakers, setSneakers] = useState(sneakersData);
  const [searchQ, setSearchQ] = useState("");

  useEffect(() => {
    setSneakers(sneakersData);
  }, [sneakersData]);

  return (
    <>
      <CollectionHeader setSearchQ={setSearchQ} searchQ={searchQ} />
      <main className={styles.collectionMain}>
        {sneakersData.length === 0 ? (
          <>
            <IconHotTrending />
            <div className={styles.noSneakersInfo}>
              Seem’s like you still didn’t add
              <br /> any new sneaker to your collection
            </div>
          </>
        ) : (
          <SneakersGrid sneakers={sneakers} searchQ={searchQ} />
        )}
      </main>
    </>
  );
}
