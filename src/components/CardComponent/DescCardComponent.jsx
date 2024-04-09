const DescNewCardComponent = ({ data, onClick }) => {
    return (
      <div className="descComponentDivision" onClick={onClick}>
        <img src={data.src} alt="Course"  className="img"/>
        <p className="desc">{data.desc}</p>
        <button className="button">Buy Now</button>
      </div>
    );
  };
  
  export default DescNewCardComponent;
  