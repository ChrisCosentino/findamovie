import { useState } from 'react';
import MovieCard from 'components/MovieCard';
import { RowContainer } from 'styled';
import MoviePreview from 'components/MoviePreview';
import { useSelectedTrailer } from 'contexts/SelectedTrailerContext';

const Row = ({ dataSource }) => {
  const [video, setVideo] = useState(null);
  const { trailer, onChangeTrailer, row } = useSelectedTrailer();

  return (
    <div>
      {dataSource.genre}
      <RowContainer>
        {dataSource?.items?.map(
          ({ poster_path, title, overview, backdrop_path }) => {
            return (
              <MovieCard
                key={title || ''}
                title={title}
                description={overview}
                posterPath={poster_path}
                onPlayTrailer={(e) => {
                  setVideo(e);
                  onChangeTrailer(e, dataSource.genre);
                }}
                backdropPath={backdrop_path}
              />
            );
          }
        )}
      </RowContainer>

      {trailer !== null && video !== null && dataSource.genre === row && (
        <MoviePreview videoId={video.trailerId} details={video} />
      )}
    </div>
  );
};

export default Row;
