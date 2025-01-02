import { useState } from "react";

function App() {

  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState([]);

  const handleSubmit = () => {
    setJobs(prev => [...prev, job]);
    setJob('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>To do list</h1>
      <input 
          style={{
            width: '300px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }} 
          value={job} 
          onChange={e => setJob(e.target.value)} 
        />
      <button 
        onClick={handleSubmit}
        style={{
          padding: '10px 20px',
          borderRadius: '5px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          transition: 'background-color 0.3s',
          marginLeft: '10px',
        }}
      >
        Add
      </button>
      <ul style={{ padding: 0 }}>
        {jobs.map((job, index) => (
          <li style={{
            padding: '10px',
            fontSize: '30px',
            color: '#555',
            transition: 'background-color 0.3s',
            fontWeight: 'bold',
          }} key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
