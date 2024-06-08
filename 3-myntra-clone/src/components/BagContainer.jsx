import { useDispatch } from "react-redux";
import styles from "./BagContainer.module.css";
import { bagAction } from "../store";
const BagContainer = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.bagItemContainer}>
      <div className={styles.itemLeftPart}>
        <img className={styles.bagItemImg} src={item.image} />
      </div>
      <div className={styles.itemRightPart}>
        <div className={styles.company}>{item.company}</div>
        <div className={styles.itemName}>{item.item_name}</div>
        <div className={styles.priceContainer}>
          <span className={styles.currentPrice}>Rs {item.current_price}</span>
          <span className={styles.originalPrice}>Rs {item.original_price}</span>
          <span className={styles.discountPercentage}>
            {" "}
            ({item.discount_percentage}% OFF)
          </span>
        </div>
        <div className={styles.returnPeriod}>
          <span className={styles.returnPeriodDays}>
            {item.return_period} days
          </span>{" "}
          return available
        </div>
        <div className={styles.deliveryDetails}>
          Delivery by{" "}
          <span className={styles.deliveryDetailsDays}>
            {item.delivery_date}
          </span>
        </div>
      </div>

      <div
        className={styles.removeFromCart}
        onClick={() => {
          dispatch(bagAction.removeFromBag(item.id));
        }}
      >
        X
      </div>
    </div>
  );
};

export default BagContainer;
