import React from "react";
import "../../App.css";

const Home = () => {
  return (
    
    <div className="home">
      <div className="main">
      <table>
        <tr>
          <th>
            <a className="text-home" href="/productlist">ProductList</a>
          </th>
          <th>
            <a className="text-home" href="/categories">Categories</a>
          </th>
          <th>
            <a className="text-home" href="/users">Users</a>
          </th>
        </tr>
      </table>
    </div>
    </div>
  );
};
export default Home;
