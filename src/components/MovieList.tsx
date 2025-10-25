import React from 'react';
import { Movie, ViewMode } from '../types';
import { MovieCardGrid } from './MovieCardGrid';
import { MovieCardList } from './MovieCardList';

interface MovieListProps {
  movies: Movie[];
  viewMode: ViewMode;
  onToggleFavorite: (id: string) => void;
}

export const MovieList: React.FC<MovieListProps> = ({movies, viewMode, onToggleFavorite}) => {
    if (movies.length === 0) 
        return <div className="no-movies">Фильмов нет</div>;

    switch(viewMode) {
        case 'grid': 
        return <div className={`movie-list-grid`}>
            {movies.map(
                movie => (
                    <MovieCardGrid 
                    key = {movie.id}
                    movie={movie}
                    onToggleFavorite={onToggleFavorite}
                    />
                )
            )}
        </div>

        case 'list':
        return <div className={`movie-list-list`}>
            {movies.map(
                movie => (
                    <MovieCardList 
                    key = {movie.id}
                    movie={movie}
                    onToggleFavorite={onToggleFavorite}
                    />
                )
            )}
        </div>

        default:
        return <div className={`unknown type`}>Неизвестный тип отображения</div>
    }
}