import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateShop from "./CreateShop";
import ViewShop from "./ViewShop";

import Spinner from "react-bootstrap/Spinner";

//Shop.js
export default ({ userData }) => {
  const [shopData, setShopData] = useState({});
  const [loading, setLoading] = useState(true);

  const userId = userData._id;
  useEffect(() => {
    axios
      .get(`https://mlty7.sse.codesandbox.io/shop/owner/${userId}`)
      .then((res) => setShopData(res.data ? res.data : {}))
      .then((err) => {
        if (err) return console.log(`Fetch error: ${err}`);
      })
      .then(() => setLoading(false));
  }, []); //eslint-disable-line
  return (
    <>
      {loading ? (
        <Spinner
          style={{ marginLeft: "49%", marginTop: "25%" }}
          animation="border"
        />
      ) : shopData.shopName ? (
        <ViewShop shopData={shopData} />
      ) : (
        <CreateShop userData={userData} />
      )}
    </>
  );
};
