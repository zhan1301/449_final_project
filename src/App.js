import { useState, useEffect } from 'react';
import './App.css';
import Homepage from './homepage';
import { supabase } from './supabaseClient';

function Source() {
  const [mySource, setMySource] = useState([]);

  useEffect(() => {
    async function getSource() {
      let { data: sources } = await supabase
        .from('finalproject')
        .select('*');
      setMySource(sources);
    }
    getSource();
  }, []);

  return (
    <table>
      {mySource.map(b => (
        <tr>
          <td>Reference: </td>
          <td>
            <a href="https://www.youtube.com/watch?v=wssk79JSsvw">
              {b.source}
            </a>
          </td>
          <td>{b.owner}</td>
        </tr>
      ))}
    </table>
  );
}

function App() {
  return (
    <div className="App">
      <Source />
      <Homepage />
    </div>
  );
}

export default App;
