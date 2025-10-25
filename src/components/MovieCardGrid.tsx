
import React from 'react';
import { Movie, ViewMode } from '../types';

interface MovieCardProps {
  movie: Movie;
  onToggleFavorite: (id: string) => void;
}

export const MovieCardGrid: React.FC<MovieCardProps> = ({ movie, onToggleFavorite }) => {
  return (
    <div className={`movie-card-grid`}>
      <img src={movie.posterUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Год: {movie.year}</p>
      <button
        onClick={() => onToggleFavorite(movie.id)}
        className={movie.isFavorite ? 'favorite active' : 'favorite'}
      >{movie.isFavorite ? "⭐" : "★"}</button>
    </div>
  );
};