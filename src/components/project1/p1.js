import { Link } from 'react-router-dom';
import { IoArrowBackSharp } from 'react-icons/io5';
import './p.scss';
import { MdWeb } from 'react-icons/md';
import video from '../Work/Data/preview.mp4';

export default function p1() {
  return (
    <div style={{ padding: '2%' }}>
      <Link
        to="/work"
        className="project_link project_back_btn"
      >
        <IoArrowBackSharp size={50} />
        {' '}
      </Link>
      <div
        className="title-section text-left text-sm-center aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration="1200"
        style={{ padding: '0' }}
      >
        <h1>
          Money
          <span> Flow</span>
        </h1>
        <span className="title-bg">Web app</span>
      </div>
      <div style={{ margin: '45px 45px', color: 'white', fontSize: '20px' }}>
        <h2>
          Project Overview
        </h2>
        <p style={{ color: 'white' }}>
          The Transaction Tracker Full Stack Application is designed to help users manage
          and analyze their financial transactions.
          This application allows users to list all their transactions,
          providing detailed information and analysis for better financial management.
          It features comparative analysis for the last two months, an annual overview graph,
          and calculates the influence percentage of each individual transaction on the overall
          financial status.
        </p>
        <div style={{ display: 'flex' }}>
          Demo:
          <a href="https://moneyflow-wandergithub.netlify.app/" target="_blank" rel="noreferrer" className="live_demo">
            {' '}
            <MdWeb size={30} />
          </a>
        </div>
        <h2>
          Minute video:
        </h2>
        <video width="320" height="320" style={{ margin: '20px' }} controls autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <h2>
          Features
        </h2>
        <ul aria-label="Technologies used">
          <li>
            Annual Overview Graph:
            <ul style={{ listStyle: 'circle', color: 'white' }}>
              <li>Visual representation of the user’s transactions over the past year.</li>
              <li>
                Monthly breakdown to show spending trends and patterns.
              </li>
              <li>Use of charts (e.g., bar charts, line graphs) for easy visualization.</li>
            </ul>
          </li>
          <li>
            Influence Percentage Calculation:
            <ul style={{ listStyle: 'circle', color: 'white' }}>
              <li>
                Calculate the influence of each transaction on the user’s
                overall financial status.
              </li>
              <li>
                Display the percentage impact of individual transactions.
              </li>
            </ul>
          </li>
          <li>
            Comparative Monthly Analysis:
            <ul style={{ listStyle: 'circle', color: 'white' }}>
              <li>Analyze and compare transactions between the last two months.</li>
              <li>
                Highlight trends and significant changes in spending patterns.
              </li>
            </ul>
          </li>
          <li>
            Transaction Management:
            <ul style={{ listStyle: 'circle', color: 'white' }}>
              <li>Users can add, edit, and delete transactions.</li>
              <li>
                Each transaction includes details such as date, amount, category,
                and description.
              </li>
            </ul>
          </li>
          <li>
            Dashboard:
            <ul style={{ listStyle: 'circle', color: 'white' }}>
              <li>A comprehensive dashboard summarizing key financial metrics.</li>
              <li>
                Quick access to recent transactions, monthly summaries, and annual overview.
              </li>
            </ul>
          </li>
          <li>
            Responsive Design:
            <ul style={{ listStyle: 'circle', color: 'white' }}>
              <li>Mobile-friendly design ensuring seamless access across various devices.</li>
            </ul>
          </li>
          <li>
            User Authentication and Authorization
          </li>
        </ul>
        <h2>
          Technical Stack
        </h2>
        <div className="tools">
          <h3>
            Frontend
          </h3>
          <ul>
            <li>React.js</li>
          </ul>
          <h3>
            Backend
          </h3>
          <ul>
            <li>Ruby on Rails</li>
            <li>RESTful API</li>
            <li>SQLite</li>
            <li>postgres</li>
          </ul>
          <h3>
            Tools and Platforms:
          </h3>
          <ul>
            <li>Version Control: Git & Github</li>
            <li>Deployment: Render.com DB-service</li>
          </ul>
        </div>
        <h2>
          Conclusion
        </h2>
        <p>
          The Transaction Tracker Full Stack Application aims to provide
          users with a powerful tool to manage and analyze their
          financial transactions. By offering detailed insights,
          comparative analysis, and visual representations, this
          application empowers users to make informed financial decisions
          and better understand their spending habits.
        </p>
      </div>

    </div>
  );
}
