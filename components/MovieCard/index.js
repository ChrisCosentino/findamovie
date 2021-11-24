import Image from 'next/image';
import { useState } from 'react';
import movieTrailer from 'movie-trailer';
import { MovieCard as StyledMovieCard } from 'styled';

const MovieCard = ({
  posterPath,
  title,
  onPlayTrailer,
  description,
  backdropPath,
}) => {
  const [trailerUrl, setTrailerUrl] = useState(null);

  const handleLoadTrailer = () => {
    movieTrailer(title || '', { id: true }).then((res) => setTrailerUrl(res));
  };

  return (
    <StyledMovieCard
      onMouseEnter={handleLoadTrailer}
      onClick={() =>
        onPlayTrailer({
          title,
          description,
          trailerId: trailerUrl,
          backdropPath,
        })
      }>
      <Image
        alt='movie'
        src={`https://image.tmdb.org/t/p/original/${posterPath}`}
        width='140'
        height='210'
      />
    </StyledMovieCard>
  );
};

export default MovieCard;
