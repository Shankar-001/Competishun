const NewCardComponent = ({ data, onClick }) => {
    return (
      <div className="ComponentDivision" onClick={onClick}>
        <img src={data.src} alt="Course"  className="img"/>
        <button className="button">Buy Now</button>
      </div>
    );
  };
  
  export default NewCardComponent;
  