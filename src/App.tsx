import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { FilterMode, Movie, ViewMode } from './types';
import { MovieList } from './components/MovieList';
import { FilterButtons } from './components/FilterButtons';
import { SearchInput } from './components/SearchInput';
import { ViewButtons } from './components/ViewButtons';

const initialMovies: Movie[] = [
  {
    id: '1',
    title: 'Крестный отец',
    year: 1972,
    posterUrl: './posters/godfather.jpg',
    isFavorite: false,
  },
  {
    id: '2',
    title: 'Побег из Шоушенка',
    year: 1994,
    posterUrl: './posters/shawshank.jpg',
    isFavorite: false,
  },
  {
    id: '3',
    title: 'Майнкрафт Фильм',
    year: 2024,
    posterUrl: './posters/minecraft.jpg',
    isFavorite: false,
  },
  {
    id: '4',
    title: 'Видео про потоп',
    year: 2021,
    posterUrl: './posters/potop.jpg',
    isFavorite: true,
  },
  {
    id: '5',
    title: 'Драйв',
    year: 2011,
    posterUrl: './posters/gosling.jpg',
    isFavorite: false,
  },
  {
    id: '6',
    title: 'Форрест Гамп',
    year: 1994,
    posterUrl: './posters/missing.jpg',
    isFavorite: true,
  },
  {
    id: '7',
    title: 'Начало',
    year: 2010,
    posterUrl: './posters/missing.jpg',
    isFavorite: false,
  },
  {
    id: '8',
    title: 'Криминальное чтиво',
    year: 1994,
    posterUrl: './posters/missing.jpg',
    isFavorite: true,
  },
  {
    id: '9',
    title: 'Список Шиндлера',
    year: 1993,
    posterUrl: './posters/missing.jpg',
    isFavorite: false,
  },
  {
    id: '10',
    title: 'Интерстеллар',
    year: 2014,
    posterUrl: './posters/missing.jpg',
    isFavorite: true,
  },
  {
    id: '11',
    title: 'Бойцовский клуб',
    year: 1999,
    posterUrl: './posters/missing.jpg',
    isFavorite: false,
  },
  {
    id: '12',
    title: 'Зеленая книга',
    year: 2018,
    posterUrl: './posters/missing.jpg',
    isFavorite: true,
  }
];

function App() {
  const [movies, setMovies] = useState<Movie[]>(initialMovies);
  const [filter, setFilter] = useState<FilterMode>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const searchRef = useRef<HTMLInputElement>(null);
  const [updateCount, setUpdateCount] = useState(0); 
  // useref не вызывает ререндер а именно это мне и нужно

  const forceUpdate = () => {
    setUpdateCount(prev => prev + 1);
  };

  const handleToggleFavorite = (id: string) => {
    setMovies(prevMovies =>
      prevMovies.map(movie =>
        movie.id === id
          ? { ...movie, isFavorite: !movie.isFavorite }
          : movie
      )
    );
  };



  const filteredMovies = movies.filter(movie => {
    if (filter == 'favorite') {
      if (!movie.isFavorite) return false;
    };

    if (searchRef.current?.value) {
      const searchStr = searchRef.current.value.toLowerCase();
      return movie.title.toLowerCase().includes(searchStr);
    }

    return true;
  })

  return (
    <div className="app">
      <h1>Каталог</h1>
      <p>Всего фильмов: {movies.length}</p>

      <ViewButtons 
        currentViewMode={viewMode} 
        onViewModeChange={setViewMode}      
      />

      <FilterButtons
        currentFilter={filter}
        onFilterChange={setFilter}
      />

      <SearchInput
        searchRef = {searchRef}
        forceUpdate = {forceUpdate}
      />

      <MovieList 
        movies={filteredMovies}
        viewMode={viewMode}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}

export default App;


