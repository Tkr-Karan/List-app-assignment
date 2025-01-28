import React, { useEffect, useState } from "react";
import { PRODUCT_API_URL } from "../../utils/apiUtils";
import ListCard from "../ListCard/ListCard";
import styles from "./ListData.module.css";
import { ADD_ITEM_ICON, newItemData } from "../../utils/static";
import EmptyData from "../EmptyData/EmptyData";

const ListData = () => {
  const [productList, setProductList] = useState(null);

  const fetchProductData = async () => {
    const response = await fetch(PRODUCT_API_URL);
    const jsonData = await response.json();

    setProductList(jsonData);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const handleItemDelete = (id) => {
    if (window.confirm("Do you want to delete the item?")) {
      const filteredData = productList.filter((product) => product.id !== id);
      setProductList(filteredData);
    }
  };

  const handleAddNewItem = () => {
    setProductList([...productList, newItemData]);
  };

  return (
    <div className={styles["product__card-container"]}>
      <div className={styles["product__card-header"]}>
        <div className={styles["product__card-heading"]}>Product List🚀</div>
        <div
          className={styles["product__card-add-new"]}
          onClick={handleAddNewItem}
        >
          <img width="20px" height="20px" src={ADD_ITEM_ICON} alt="add-icon" />
          <div>Add New Item</div>
        </div>
      </div>

      <div className={styles["product__card-list"]}>
        {productList && productList.length !== 0 ? (
          productList.map((product) => (
            <ListCard
              key={product.id}
              productData={product}
              handleItemDelete={handleItemDelete}
            />
          ))
        ) : (
          <EmptyData />
        )}
      </div>
    </div>
  );
};

export default ListData;
