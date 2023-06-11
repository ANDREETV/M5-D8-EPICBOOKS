import React from 'react'
import Welcome from '../components/Welcome'
import LatestRelease from '../components/LatestRelease'

export default function Home({films, selectFilms, filmsSelected, filterHorror,filterScifi,filterRomance,filterHistory,filterFantasy}) {

  // console.log(selectFilms);
  return (
    <div>
      <Welcome films={films} selectFilms={selectFilms} filmsSelected={filmsSelected}/>
      <LatestRelease 
          films={films}
          selectFilms={selectFilms} 
          filmsSelected={filmsSelected} 
          filterHorror={filterHorror} 
          filterScifi={filterScifi} 
          filterRomance={filterRomance}
          filterHistory={filterHistory}
          filterFantasy={filterFantasy}
          />
    </div>
  )
}
