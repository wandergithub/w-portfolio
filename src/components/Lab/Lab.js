import "./Lab.scss";

const Lab = () => {
  return (
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "40px",
    }}
  >
      <div
        className="title-section text-left text-sm-center aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h1>
          Code
          <span> Lab</span>
        </h1>
        <span className="title-bg">Laboratory</span>
      </div>
      <p className="text-p" style={{ maxWidth: "70%" }}>
        ReactJS/Web Components, blogs, fun coding and everything else
        accomplished on my spare software development time.
      </p>
      <ul>
        <li>
            
        </li>
      </ul>
    </div>
  );
};

export default Lab;
