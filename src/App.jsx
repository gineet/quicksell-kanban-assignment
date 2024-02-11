import React, { useEffect, useState } from 'react';
import KanbanBoard from './components/KanbanBoard';

function App() {
  const [data, setData] = useState({ tickets: [], users: [] });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const apiData = await response.json();
        setData(apiData);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  return <KanbanBoard data={data} />;
}

export default App;
