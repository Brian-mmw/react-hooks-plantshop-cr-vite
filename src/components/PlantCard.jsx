import { useState } from "react";

function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(true);

  return (
    <div className="card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button onClick={() => setInStock(!inStock)}>
        {inStock ? "In Stock ✅" : "Out of Stock ❌"}
      </button>
    </div>
  );
}

export default PlantCard;