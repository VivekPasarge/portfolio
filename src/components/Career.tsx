import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BE Information Science</h4>
                <h5>Engineering Student</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Started Bachelor of Engineering in Information Science and Engineering. Began exploring the fundamentals of computer science and programming.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Learning Development & DSA</h4>
                <h5>Self-Taught</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              In my 3rd semester, I started learning Web Development and Data Structures & Algorithms. Built a strong foundation in problem-solving and coding.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Learner</h4>
                <h5>Projects & Portfolios</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Actively learning full stack development using React.js, Node.js, and Next.js. Building real-world applications like DonateLike and my personal portfolio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
