const CardComponent = ({ data, onClick }) => {
  return (
    <div className="ComponentDivision" onClick={onClick}>
      <img src={data.src} alt="Course" />
    </div>
  );
};

export default CardComponent;
