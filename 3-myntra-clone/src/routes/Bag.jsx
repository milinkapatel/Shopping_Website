import BagContainer from "../components/BagContainer";
import BagSummary from "../components/BagSummary";
import styles from "../components/Bag.module.css";
import { useSelector } from "react-redux";

const Bag = () => {
  const bag = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const bagItems = items.filter((item) => bag.includes(item.id));
  return (
    <>
      <main>
        <div className={styles.bagPage}>
          <div className={styles.bagItemsContainer}>
            {bagItems.map((item) => (
              <BagContainer key={item.id} item={item} />
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};

export default Bag;
