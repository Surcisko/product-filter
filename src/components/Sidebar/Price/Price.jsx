import { Input } from "../../Input";
import "./Price.css";

export const Price = ({ handleChange, selectedCategory }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title ">Price</h2>
      <div>
        {/* <label className="sidebar-label-container"> */}
        {/* //setting to default on Onchange */}
        {/* <Input
            onChange={handleChange}
            type="radio"
            value=""
            name="test2"
            title="All"
          />
          <span className="checkmark"></span>
        </label> */}

        <Input
          handleChange={handleChange}
          value={""}
          title="All"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={50}
          title="$0 - $50"
          name="test2"
          selectedCategory={selectedCategory}
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="$50 - $100"
          name="test2"
          selectedCategory={selectedCategory}
        />
        <Input
          handleChange={handleChange}
          value={150}
          title="$100 - $150"
          name="test2"
          selectedCategory={selectedCategory}
        />
        <Input
          handleChange={handleChange}
          value={250}
          title="Over $150"
          name="test2"
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
};
