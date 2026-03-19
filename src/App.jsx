import { Nav } from "./components/Navigation/Nav";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Products } from "./components/Products/Products";
import { Recommended } from "./components/Recommended/Recommended";
import { useState } from "react";
// import "./index.css";

//Database
import { Data } from "./db/data";
// import { Category } from "./components/Sidebar/Category/Category";
import { Card } from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  //Input Filter
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // const filteredItems = Data.filter((product) =>
  //   product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()!==-1),
  // );
  const filteredItems = Data.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1,
  );

  //Radio Filter
  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedCategory(value === "" ? null : value);
  };

  //Buttons Filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // let filteredProducts = "";
  // let selected = "";

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    //Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected,
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      ),
    );
  }
  const result = filteredData(Data, selectedCategory, query);

  return (
    <>
      <section className="page-layout">
        <Nav query={query} handleInputChange={handleInputChange} />
        <Sidebar handleChange={handleChange} selected={selectedCategory} />
        <Recommended handleClick={handleClick} />
        <Products result={result} />
      </section>
    </>
  );
}

export default App;

/* 
    <section className="page-layout">
      <Nav />

      <main>
        <div className="sidebar-layout">
          <Sidebar />
        </div>
        <div className="products-layout">
          <Recommended />
          <Products />
        </div>
      </main>
    </section>
*/
