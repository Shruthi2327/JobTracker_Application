// import React from 'react';
// import { Link } from 'react-router-dom';
// import './JobCard.css'; // Import custom CSS

// const JobCard = ({ job, setJobs, index }) => {
//   const handleDelete = async () => {
//     await fetch(`/api/jobs/${job._id}`, { method: 'DELETE' });
//     const res = await fetch('/api/jobs');
//     const updated = await res.json();
//     setJobs(updated);
//   };

//   return (
//     <div className="job-card">
//       <div className="job-header">
//         <span className="job-order">#{index + 1}</span>
//         <h2>{job.company}</h2>
//       </div>
//       <p><strong>Role:</strong> {job.role}</p>
//       <p><strong>Status:</strong> {job.status}</p>
//       <p><strong>Date:</strong> {new Date(job.date).toLocaleDateString()}</p>
//       {job.link && <a href={job.link} target="_blank" rel="noopener noreferrer">View Job Posting</a>}
//       <div className="job-actions">
//         <Link to={`/edit/${job._id}`} className="edit-btn">Edit</Link>
//         <button onClick={handleDelete} className="delete-btn">Delete</button>
//       </div>
//     </div>
//   );
// };

// export default JobCard;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './JobCard.css';

const JobCard = ({ job, setJobs, index }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this job?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5000/api/jobs/${job._id}`, {
        method: 'DELETE'
      });

      if (res.ok) {
        // Remove the job from UI
        setJobs(prev => prev.filter(j => j._id !== job._id));
      } else {
        console.error("Failed to delete job");
      }
    } catch (err) {
      console.error("Error deleting job:", err);
    }
  };

  return (
    <div className="job-card">
      <h3>{job.company}</h3>
      <p><strong>Role:</strong> {job.role}</p>
      <p><strong>Status:</strong> {job.status}</p>
      <p><strong>Date:</strong> {new Date(job.date).toLocaleDateString()}</p>
      <a href={job.link} target="_blank" rel="noopener noreferrer">🔗 Link</a>

      <div className="job-actions">
        <button onClick={() => navigate(`/edit/${job._id}`)} className="edit-button">Edit</button>
        <button onClick={handleDelete} className="delete-button">Delete</button>
      </div>
    </div>
  );
};

export default JobCard;
