import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => { fetchData(); }, []);
  const fetchData = async () => {
    try { const response = await axios.get('/api/health'); setData(response.data); } 
    catch (error) { console.error('Error fetching data:', error); } 
    finally { setLoading(false); }
  };
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>AppTestNewUpload1</h1>
      <p>for anime group</p>
      <hr style={{ margin: '2rem 0' }} />
      {loading ? (<p>Loading...</p>) : (
        <div>
          <h2>Backend Status:</h2>
          <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '4px' }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}