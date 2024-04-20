import CountUpAnimation from "../Functions/CountUpAnimation";

const About = () => {
  return (
    <div className="main-container">
      <div className="width-container">
        <div className="about-content">
          <h1>About Competishun</h1>
          <br />
          <p className="content">
            Competishun is a well known name in the field of IIT-JEE / NEET
            coaching providing Pre-Engineering / Pre-Medical training to
            aspirants intending to prepare and appear in various competitive and
            scholarship examinations of national and international level such as
            JEE (Main+Advanced) formerly IIT- JEE (Indian Institutes of
            Technology - Joint Entrance Examination).JEE Main (Formerly AIEEE -
            All India Engineering Entrance Examination), NEET (National
            Eligibility cum Entrance Test), BITSAT (Birla Institute of
            Technology & Science Admission Test), NTSE (National Talent Search
            Examination), Olympiads etc.
          </p>
          {/* <h2>200+ million views  on our YouTube</h2> */}
          <div className="info-card">
            <div>
              <h1><CountUpAnimation initialValue={200}  targetValue={250}  text="+" /></h1>
              <p className="info-txt">
                Millions View on our
                <br /> Youtube Channels
              </p>
            </div>
            <div>
              <h1><h1><CountUpAnimation initialValue={199990}  targetValue={200000}  text="+" /></h1></h1>
              <p className="info-txt">App Downloads</p>
            </div>
          </div>
        </div>
        <div className="video-content">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/bzoAvwQg4L0?si=nuaDYIFiiqR3NbPa"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default About;
