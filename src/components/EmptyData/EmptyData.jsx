import React from "react";
import styles from "../ListData/ListData.module.css";
import { EMPTY_BIN_ICON } from "../../utils/static";

const EmptyData = () => {
  return (
    <div className={styles["product__card-no-data"]}>
      No Data
      <img width="70px" height="70px" src={EMPTY_BIN_ICON} alt="empty-bin" />
    </div>
  );
};

export default EmptyData;
