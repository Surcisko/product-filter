import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

export const Card = ({ img, title, star, reviews, newPrice, prevPrice }) => {
  return (
    <div>
      <section
        className="card"
        style={{
          padding: "50px 20px",
          maxHeight: "25rem",
          minHeight: "25rem",
          alignContent: "center",
        }}
      >
        <img
          src={img}
          alt={title}
          className="card-img"
          style={{ maxHeight: "12rem", minHeight: "6rem" }}
        />

        <div className="card-details st">
          <h3 className="card-title">{title}</h3>

          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>

          <section
            className="card-price"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="price">
              <del>{newPrice}</del> {prevPrice}
            </div>
            <div className="bag">
              <BsFillBagHeartFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};
