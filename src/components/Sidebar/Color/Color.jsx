import "./Color.css";
import { Input } from "../../Input";

export const Color = ({ handleChange, selectedCategory }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title color-title">Color</h2>

      <div>
        {/* <label className="sidebar-label-container"> */}
        {/* //setting to default on Onchange */}
        {/* <Input
            onChange={handleChange}
            type="radio"
            title="All"
            value=""
            name="test3"
          />
          <span className="checkmark "></span>
        </label> */}

        <Input handleChange={handleChange} value="" title="All" name="test3" />

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test3"
          color="black"
          selected={selectedCategory}
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test3"
          color="blue"
          selected={selectedCategory}
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test3"
          color="red"
          selected={selectedCategory}
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test3"
          color="green"
          selected={selectedCategory}
        />

        <Input
          handleChange={handleChange}
          type="radio"
          value="white"
          name="test3"
          title="White"
          selected={selectedCategory}
        />
      </div>
    </div>
  );
};
