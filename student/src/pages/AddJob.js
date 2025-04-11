
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './AddJob.css'; // Import the CSS file

// const AddJob = () => {
//   const [formData, setFormData] = useState({
//     company: '',
//     role: '',
//     status: 'Applied',
//     date: '',
//     link: ''
//   });

//   const navigate = useNavigate();

//   const handleChange = e =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async e => {
//     e.preventDefault();
//     await fetch('/api/jobs', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData)
//     });
//     navigate('/');
//   };

//   return (
//     <div className="form-container">
//       <form onSubmit={handleSubmit} className="form-card">
//         <h2 className="form-title">Add Job Application</h2>

//         <input
//           name="company"
//           placeholder="Company"
//           onChange={handleChange}
//           required
//           className="form-input"
//         />

//         <input
//           name="role"
//           placeholder="Role"
//           onChange={handleChange}
//           required
//           className="form-input"
//         />

//         <select
//           name="status"
//           onChange={handleChange}
//           className="form-input"
//         >
//           <option>Applied</option>
//           <option>Interview</option>
//           <option>Offer</option>
//           <option>Rejected</option>
//         </select>

//         <input
//           type="date"
//           name="date"
//           onChange={handleChange}
//           required
//           className="form-input"
//         />

//         <input
//           name="link"
//           placeholder="Link (optional)"
//           onChange={handleChange}
//           className="form-input"
//         />

//         <button type="submit" className="submit-button">
//           Add Job
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddJob;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddJob.css';

const AddJob = () => {
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    status: 'Applied',
    date: '',
    link: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        navigate('/');
      } else {
        console.error('Failed to add job');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-card">
        <h2 className="form-title">Add Job Application</h2>

        <input
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          required
          className="form-input"
        />

        <input
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
          required
          className="form-input"
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="form-input"
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="form-input"
        />

        <input
          name="link"
          placeholder="Link (optional)"
          value={formData.link}
          onChange={handleChange}
          className="form-input"
        />

        <button type="submit" className="submit-button">
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
