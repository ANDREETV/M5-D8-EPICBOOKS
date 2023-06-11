import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MyNav from './components/MyNav';
import Horror from './pages/Horror';
import Home from './pages/Home';
import { useState } from 'react';
import horror from './categoryFilms/horror.json'
import scifi from './categoryFilms/scifi.json'
import Scifi from './pages/Scifi';
import romance from './categoryFilms/romance.json'
import Romance from './pages/Romance.jsx';
import history from './categoryFilms/history.json'
import History from './pages/History';
import fantasy from './categoryFilms/fantasy.json'
import Fantasy from './pages/Fantasy';
import BookDetails from './components/BookDetails';


function App() {
  const [query, setQuery] = useState('')

  function handleChangeInput(value) {
    setQuery(value)
  }

  const filterHorror = horror.filter((book) => book.title.toLowerCase().includes(query.toLowerCase()));
  const filterScifi = scifi.filter((book) => book.title.toLowerCase().includes(query.toLowerCase()));
  const filterRomance = romance.filter((book) => book.title.toLowerCase().includes(query.toLowerCase()));
  const filterHistory = history.filter((book) => book.title.toLowerCase().includes(query.toLowerCase()));
  const filterFantasy = fantasy.filter((book) => book.title.toLowerCase().includes(query.toLowerCase()));

  let films =[ 
              { 
                'id': 1,
                'name':'Horror', 
              },
              {
                'id': 2,
                'name':'Scifi', 
              },
              {
                'id': 3,
                'name':'Romance', 
              },
              {
                'id': 4,
                'name':'History', 
              },
              {
                'id': 5,
                'name':'Fantasy', 
              }
          ]


  const [filmsSelected, setFilmsSelected] = useState(0);

  const selectFilms = (event) => {
    // console.log(event.target.value);
    setFilmsSelected(event.target.value)
  } 

  return (
    <div>
      <BrowserRouter>
        <MyNav handleQueryChange={handleChangeInput}/>
        <Routes>
          <Route index element={<Home 
                    filterScifi={filterScifi} 
                    filterHorror={filterHorror} 
                    films={films} 
                    selectFilms={selectFilms} 
                    filmsSelected={filmsSelected} 
                    filterRomance={filterRomance}
                    filterHistory={filterHistory}
                    filterFantasy={filterFantasy}
                    />} 
                    
                    /> 

          <Route path='horror' element={<Horror filterHorror={filterHorror}/>} />

          <Route path='scifi' element={<Scifi filterScifi={filterScifi}/>} />

          <Route path='romance' element={<Romance filterRomance={filterRomance}/>} />

          <Route path='history' element={<History filterHistory={filterHistory}/>} />

          <Route path='fantasy' element={<Fantasy filterFantasy={filterFantasy}/>} />
          
          <Route path=':libro/:asin' element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
