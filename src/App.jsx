import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import HeroList from './components/HeroList/HeroList';
import { HERO_STATS } from './config.js';

function App() {
  const [heroes, setHeroes] = useState();

  useEffect(() => {
    axios.get(HERO_STATS).then((res) => {
      const fetchHeroes = res.data;
      setHeroes(fetchHeroes);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <HeroList heroes={heroes} />
    </div>
  );
}

export default App;
