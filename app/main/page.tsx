import { getData } from "../actions";

import CollectionContent from "./CollectionContent";

export default async function Collection() {
  const sneakersData = await getData();

  return <CollectionContent sneakersData={sneakersData} />;
}
