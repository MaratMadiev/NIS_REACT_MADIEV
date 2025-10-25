
import React from 'react';
import { Movie, ViewMode } from '../types';

interface MovieCardProps {
  movie: Movie;
  onToggleFavorite: (id: string) => void;
}

export const MovieCardList: React.FC<MovieCardProps> = ({ movie, onToggleFavorite }) => {
  return (
    <div className="movie-card-list">
      <h3 className="movie-list-title">{movie.title}</h3>
      <span className="movie-list-year">({movie.year}) </span>
      <button
        onClick={() => onToggleFavorite(movie.id)}
        className={`favorite-btn ${movie.isFavorite ? 'active' : ''}`}
      >
        {movie.isFavorite ? "⭐" : "★"}
      </button>
    </div>
  );
};