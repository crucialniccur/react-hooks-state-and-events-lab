import React, { useState } from "react";

function Item({ name, category }) {
  const [addCart, setAddCart] = useState(false);

  function handleClick() {
    setAddCart(!addCart);
  }

  return (
    <li className={addCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick}>
        {addCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
