import React, { useState } from "react";
import styles from "./ListCard.module.css";
import { CONFIRM_DELETE_ICON, DELETE_ICON } from "../../utils/static";

const ListCard = ({ productData, handleItemDelete }) => {
  const [showDelete, setShowDelete] = useState(false);
  const [deleteHover, setDeleteHover] = useState(false);

  return (
    <div
      className={styles["product__card"]}
      onMouseOver={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
    >
      <div className={styles["product__card-img"]}>
        <img src={productData.image} alt="product-image" />
      </div>

      {showDelete && (
        <div className={styles["delete__card-container"]}>
          {!deleteHover ? (
            <img
              width="20px"
              height="20px"
              src={DELETE_ICON}
              alt="delete-icon"
              onMouseOver={() => {
                setDeleteHover(true);
              }}
            />
          ) : (
            <img
              width="20px"
              src={CONFIRM_DELETE_ICON}
              alt="delete-icon"
              style={{
                background: "red",
              }}
              onMouseLeave={() => {
                setDeleteHover(false);
              }}
              onClick={() => {
                handleItemDelete(productData.id);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ListCard;
