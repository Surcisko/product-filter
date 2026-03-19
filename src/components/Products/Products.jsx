import "./Product.css";
import { Card } from "../../components/Card";

export const Products = ({ result }) => {
  return <section className="card-container">{result}</section>;
};
