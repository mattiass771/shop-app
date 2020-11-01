import React from "react";

import ShopItems from "./ViewShop/ShopItems";
import ShopJumbotron from "./ViewShop/ShopJumbotron";

// CreateShop.js
export default ({ shopData }) => {
  return (
    <>
      <ShopJumbotron shopData={shopData} />
      <ShopItems />
    </>
  );
};
