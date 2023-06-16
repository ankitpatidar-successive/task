import { useEffect, useState } from "react";
import axios from "axios";
let Users = [];
export default Users = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await axios.get(
        `https://api.escuelajs.co/api/v1/users`
      );
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="user-main">
      {categories.data?.map((item) => (
        <div class="product">
          <div className="text">
            <img src={item.avatar} />
            <span>{item.email}</span><br/>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};
