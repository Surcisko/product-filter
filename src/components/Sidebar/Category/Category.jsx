import "./Category.css";
import { Input } from "../../Input";

export const Category = ({ handleChange, selectedCategory }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        {/* <label className="sidebar-label-container"> */}
        {/* //setting to default on Onchange */}
        {/* <Input
            onChange={handleChange}
            type="radio"
            value=""
            name="test"
            title="All"
          />
          <span className="checkmark"></span>
        </label> */}

        <Input
          handleChange={handleChange}
          value={""}
          title="All"
          name="test"
          selected={selectedCategory}
        />

        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
          selected={selectedCategory}
        />

        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
          selected={selectedCategory}
        />

        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
          selected={selectedCategory}
        />

        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
          selected={selectedCategory}
        />
      </div>
    </div>
  );
};
