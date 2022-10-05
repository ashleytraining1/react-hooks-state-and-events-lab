import React, { useState } from "react";

function Item({ name, category }) {
  const [whenClicked, setMode] = useState(false);

  function handleClick(){
    setMode((whenClicked) => !whenClicked)
  }

  const itemClass = whenClicked ? "in-cart" : "";
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>
        { whenClicked ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
// import React,{useState} from "react";


// function Item({ name, category }) {
//   const [whenClicked, setMode] = useState(false);

//   function handleClick(){
//     setMode((whenClicked) => !whenClicked)
//     const itemClass = whenClicked ? "in-cart" : "";
//   }
//   return (
//     <li className={itemClass}>
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button className="add" onClick={handleClick}>{ whenClicked ? "Erase From Cart" : "Add to Cart"}</button>
//     </li>
//   );
// }
// //   return (
// //     <li className="">
// //       <span>{name}</span>
// //       <span className="category">{category}</span>
// //       <button className="add">Add to Cart</button>
// //     </li>
// //   );
// // }

// export default Item;
