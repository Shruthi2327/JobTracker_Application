// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './EditJob.css'; // Import the CSS

// const EditJob = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [status, setStatus] = useState('Applied');

//   useEffect(() => {
//     fetch(`/api/jobs/${id}`)
//       .then(res => res.json())
//       .then(data => setStatus(data.status));
//   }, [id]);

//   const handleSubmit = async e => {
//     e.preventDefault();
//     await fetch(`/api/jobs/${id}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ status })
//     });
//     navigate('/');
//   };

//   return (
//     <div className="edit-form-container">
//       <form onSubmit={handleSubmit} className="edit-form-card">
//         <h2 className="edit-form-title">Update Job Status</h2>

//         <select
//           value={status}
//           onChange={e => setStatus(e.target.value)}
//           className="edit-form-select"
//         >
//           <option>Applied</option>
//           <option>Interview</option>
//           <option>Offer</option>
//           <option>Rejected</option>
//         </select>

//         <button type="submit" className="edit-submit-button">
//           Update Status
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditJob;
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditJob.css';

const EditJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('Applied');

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/jobs/${id}`);
        const data = await res.json();
        setStatus(data.status);
      } catch (err) {
        console.error('Failed to fetch job:', err);
      }
    };
    fetchJob();
  }, [id]);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/jobs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });

      if (res.ok) {
        navigate('/');
      } else {
        console.error('Failed to update job status');
      }
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  return (
    <div className="edit-form-container">
      <form onSubmit={handleSubmit} className="edit-form-card">
        <h2 className="edit-form-title">Update Job Status</h2>

        <select
          value={status}
          onChange={e => setStatus(e.target.value)}
          className="edit-form-select"
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>

        <button type="submit" className="edit-submit-button">
          Update Status
        </button>
      </form>
    </div>
  );
};

export default EditJob;
