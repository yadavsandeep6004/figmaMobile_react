import "./style.css";
import arrawo from "../../assets/Vector.svg";
import Group1 from "../../assets/Group1.svg";
import Group2 from "../../assets/Group2.svg";

const Card = () => {
  const arr = new Array(8).fill(0);
  return (
    <>
      <div className="top-heading">
        <img src={arrawo} alt="img" />
        <h2>Favorite Product</h2>
      </div>
      <div className="card-cantainar">
        {arr.map((x, i) => {
          return (
            <div className="Card">
              <div className="Card-image">
                <img src={`https://picsum.photos/${200 + i}`} alt="img" />
              </div>
              <div className="Card-text">
                <h3 className="heading">Nike Air Max 270 React ENG</h3>
                <img src={Group1} alt="img" />
                <h3 className="price">$299,43</h3>
                <span className="price-two">$534,33</span>
                <span className="price-discount">24% Off</span>
                <img src={Group2} alt="img" className="delete" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="down-bar"></div>
    </>
  );
};
export default Card;
