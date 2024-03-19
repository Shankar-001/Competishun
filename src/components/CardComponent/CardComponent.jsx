const CardComponent = ({ data }) => {
  return (
    <div className="ComponentDivision">
      <img src={data.src} alt="Course" />
    </div>
  );
};

export default CardComponent;
