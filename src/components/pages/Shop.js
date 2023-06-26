import React, { useState } from "react";
import products from "../products/products";
import { Link } from "react-router-dom";
import "../styles/Shop.css";
import uniqid from "uniqid";

const Categories = ({
  gender,
  category,
  handleSelectGender,
  handleSelectCategory,
}) => {
  return (
    <div className="top">
      <div className="gender-section">
        <button
          className={`men ${gender === "men" ? "active" : ""}`}
          onClick={() => handleSelectGender("men")}
        >
          Men
        </button>
        <button
          className={`women ${gender === "women" ? "active" : ""}`}
          onClick={() => handleSelectGender("women")}
        >
          Women
        </button>
      </div>
      <div className="categories sm:mx-20 md:mx-[11rem]">
        <button
          className={`category-button tshirts ${
            category === "tshirts" ? "active" : ""
          }`}
          onClick={() => handleSelectCategory("tshirts")}
        >
          {gender === "men" ? "T-Shirts & Polos" : "T-Shirts and Tops"}
        </button>
        <button
          className={`category-button shirts ${
            category === "shirts" ? "active" : ""
          }`}
          onClick={() => handleSelectCategory("shirts")}
        >
          {gender === "men" ? "Shirts" : "Dresses"}
        </button>
        <button
          className={`category-button sweaters ${
            category === "sweaters" ? "active" : ""
          }`}
          onClick={() => handleSelectCategory("sweaters")}
        >
          Sweaters
        </button>
        <button
          className={`category-button jackets ${
            category === "jackets" ? "active" : ""
          }`}
          onClick={() => handleSelectCategory("jackets")}
        >
          Jackets
        </button>
      </div>
    </div>
  );
};

const Shop = () => {
  const [gender, setGender] = useState("men");
  const [category, setCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleSelectGender = (selection) => {
    setGender(selection);
  };

  const handleSelectCategory = (selection) => {
    setCategory(selection);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  const Card = ({ e }) => {
    return (
      <li className="licards">
        <Link to={`/shop/${e.name.replace(/\s/g, "-")}`}>
          <div className="image-container">
            <img className="image-containerimg" src={e.image} alt={e.name} />
          </div>
          <p className="price pshop">{e.price.toFixed(2)} USD</p>
          <p className="name">{e.name}</p>
        </Link>
      </li>
    );
  };

  return (
    <div className="shop">
      <Categories
        gender={gender}
        category={category}
        handleSelectGender={handleSelectGender}
        handleSelectCategory={handleSelectCategory}
      />
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          onChange={handleSearch}
          value={searchValue}
          placeholder={`Search in ${gender}`}
        />
      </div>
      <ul className="cards ulcards">
        {products
          .filter((e) => category === "" || e.cat === category)
          .filter((e) => e.gender === gender)
          .filter(
            (e) =>
              searchValue === "" ||
              e.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((e) => (
            <Card key={uniqid()} e={e} />
          ))}
      </ul>
    </div>
  );
};

export default Shop;
