import { FormEvent } from "react";
import SearchIcon from "../icons/icons-24px/SearchIcon";
import Input from "../input/Input";

import styles from "./SearchBar.module.css";

export default function SearchBar({
  handleChange,
  searchValue,
}: {
  handleChange: (event: any) => void;
  searchValue: string;
}) {
  return (
    <Input
      isIcon={true}
      Icon={SearchIcon}
      handleInput={handleChange}
      placeholder={"Search"}
      label={""}
      type={"search"}
      myValue={searchValue}
      isAlert={false}
    />
  );
}
