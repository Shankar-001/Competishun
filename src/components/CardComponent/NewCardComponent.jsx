const NewCardComponent = ({ data, onClick }) => {
    return (
      <div className="ComponentDivision" onClick={onClick}>
        <img src={data.src} alt="Course"  className="img"/>
        <button className="button">Know more...</button>
      </div>
    );
  };
  
  export default NewCardComponent;
  