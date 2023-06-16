import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
let ProductList = [];

export default ProductList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  
  const getData = async () => {
    try {
      const data = await axios.get(
        `https://api.escuelajs.co/api/v1/products`
      );
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
      //console.log("🚀 ~ file: ProductList.js:21 ~ getData ~ data:", data)
  };

  const renderImage = (item)=>{
    const selectedImageUrl = item?.images?.map((url, index) => {
      if (index === 0) {
        return url;
      }
      return "";
    });
    return(<img src={selectedImageUrl} />)  
    }

  return (
    <div className="main">
      {categories.data?.map((item) => (
        <div class="product-card">
           {renderImage(item)}
          <div className="text">
            <span> {item.title}</span><br/>
            <span>$ {item.price}</span><br/>
            </div>
        </div>
      ))}
    </div>
  );
};
