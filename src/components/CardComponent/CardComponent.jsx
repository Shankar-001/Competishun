const CardComponent = ({ data }) => {
  return (
    <div className="ComponentDivision">
      <img src={data.src} alt="Course" />
      <h2>{data.title}</h2>
      <p>{data.desc}</p>
    </div>
  );
};

export default CardComponent;
