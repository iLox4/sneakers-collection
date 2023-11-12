import { FormEvent } from "react";
import SearchIcon from "../icons/icons-24px/SearchIcon";
import Input from "../input/Input";

import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <Input
      isIcon={true}
      Icon={SearchIcon}
      handleInput={() => console.log("EE")}
      label={"Search"}
    />
  );
}
