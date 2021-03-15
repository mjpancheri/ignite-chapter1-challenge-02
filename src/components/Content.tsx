import { MovieCard } from './MovieCard';

import '../styles/content.scss';
import React from 'react';
import { Header } from './Header';

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  movies: Array<MovieProps>;
  selectedGenreTitle: string; 
}

export function Content({ movies, selectedGenreTitle }: ContentProps) {

  return (
    <div className="container">
        <Header title={selectedGenreTitle} />

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard 
                key={`m-${movie.Title}`}
                title={movie.Title} 
                poster={movie.Poster} 
                runtime={movie.Runtime} 
                rating={movie.Ratings[0].Value} 
              />
            ))}
          </div>
        </main>
      </div>
  )
}