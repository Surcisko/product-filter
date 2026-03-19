import { Category } from "././Category/Category.jsx";
import { Color } from "././Color/Color.jsx";
import { Price } from "././Price/Price.jsx";
import "./Sidebar.css";

export const Sidebar = ({ handleChange, selectedCategory }) => {
  return (
    <div>
      <section className="sidebar">
        <Category
          handleChange={handleChange}
          selectedCategory={selectedCategory}
        />

        <Price
          handleChange={handleChange}
          selectedCategory={selectedCategory}
        />

        <Color
          handleChange={handleChange}
          selectedCategory={selectedCategory}
        />
      </section>
    </div>
  );
};
