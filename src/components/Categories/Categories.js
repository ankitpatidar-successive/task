import { useEffect, useState } from "react";
import axios from "axios";
let Categories = [];
export default Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await axios.get(
        `https://api.escuelajs.co/api/v1/categories`
      );
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="main">
      {categories.data?.map((item) => (
        <div class="product-card">
          <div className="text">
            <img src={item.image} />
            <span>{item.name}</span><br/>
            {console.log("🚀 ~ file: ProductList.js:57 ~ item.description:",item.image)}
          </div>
        </div>
      ))}
      </div>
  );
};
