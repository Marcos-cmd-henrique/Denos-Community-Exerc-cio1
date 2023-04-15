import React from 'react';
import Card from '../Card';



const App: React.FC = () => {
  return (
    <div>
    <Card title="React é melhor que Angular" description="Front-End React" rate={3} />
    <Card title="Angular é melhor que React" description="Front-End Angular" rate={1} />
  </div>
  
  );
}

export default App;