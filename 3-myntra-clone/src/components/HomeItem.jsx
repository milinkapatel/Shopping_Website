import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/index";
import { useRef } from "react";
const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bag = useSelector((store) => store.bag);
  const addedToBag = bag.includes(item.id);

  const handleAddToBag = () => {
    dispatch(bagAction.addToBag(item.id));
  };
  const handleRemoveFromBag = () => {
    dispatch(bagAction.removeFromBag(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {addedToBag ? (
        <button className="btn-remove-bag" onClick={handleRemoveFromBag}>
          Remove
        </button>
      ) : (
        <button className="btn-add-bag" onClick={handleAddToBag}>
          Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
