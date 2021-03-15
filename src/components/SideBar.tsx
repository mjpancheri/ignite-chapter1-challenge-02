import { useEffect, useState } from 'react';

import { Button } from './Button';
import '../styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  genres: Array<GenreResponseProps>;
  selectedGenreId: number;
  selectGenre: (id: number) => void;
}

export function SideBar({ genres, selectedGenreId, selectGenre }: SideBarProps) {

  function handleClickButton(id: number) {
    selectGenre(id);
  }

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={`g-${genre.id}`}
              id={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}