// import React, { useEffect, useState } from 'react';
// import JobCard from './JobCard';
// import FilterBar from '../Components/FilterBar';
// import './Home.css'; // import the CSS file

// const Home = () => {
//   const [jobs, setJobs] = useState([]);
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:5000/api/jobs')
//       .then(res => res.json())
//       .then(data => setJobs(data))
//       .catch(err => console.error("Failed to fetch jobs:", err));
//   }, []);

//   const filteredJobs = jobs.filter(job => filter ? job.status === filter : true);

//   return (
//     <div className="home-container">
//       <h1 className="home-title">Job Applications</h1>
//       <FilterBar setFilter={setFilter} />
//       <div className="jobs-grid">
//         {filteredJobs.map((job, index) => (
//           <JobCard key={job._id} job={job} setJobs={setJobs} index={index} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JobCard from './JobCard';
import FilterBar from '../Components/FilterBar';
import './Home.css';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/jobs')
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(err => console.error("Failed to fetch jobs:", err));
  }, []);

  // const filteredJobs = jobs.filter(job => filter ? job.status === filter : true);
  const filteredJobs = jobs.filter(job =>
    filter ? job.status.trim().toLowerCase() === filter.toLowerCase() : true
  );
  
  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-title">Job Applications</h1>
        <button className="add-job-button" onClick={() => navigate('/add')}>
          + Add Job
        </button>
      </div>
      <FilterBar setFilter={setFilter} />
      <div className="jobs-grid">
        {filteredJobs.map((job, index) => (
          <JobCard key={job._id} job={job} setJobs={setJobs} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
