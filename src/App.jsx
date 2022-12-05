import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import Controls from './components/Controls/Controls';
import Header from './components/Header/Header';
import List from './components/List/List';
import { HERO_STATS } from './config.js';

function App() {
  const [heroes, setHeroes] = useState([]);

  const [filtredHeroes, setFiltredHeroes] = useState(heroes);

  const handleSearch = (search) => {
    let data = [...heroes];

    if (search) {
      data = data.filter((h) => h.name.toLowerCase().includes(search.toLowerCase()));
    }

    setFiltredHeroes(data);
  };

  useEffect(() => {
    axios.get(HERO_STATS).then((res) => {
      const fetchHeroes = res.data;
      setHeroes(fetchHeroes);
    });
  }, []);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [heroes]);

  return (
    <div className="wrapper">
      <Header />
      <Controls onSearch={handleSearch} />
      <List>
        {filtredHeroes.map((h) => {
          const heroInfo = {
            icon: h.icon,
            name: h.localized_name,
          };

          return <Card key={h.name} {...heroInfo} />;
        })}
      </List>
    </div>
  );
}

export default App;
