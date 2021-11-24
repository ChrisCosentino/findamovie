import { PreviewContainer, PreviewDescription } from 'styled';
import YouTube from 'react-youtube';
import { useSelectedTrailer } from 'contexts/SelectedTrailerContext';

const playerOptions = {
  height: '520',
  width: '920',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    controls: 0,
    disablekb: 1,
    modestbranding: 1,
  },
};

const MoviePreview = () => {
  const { trailer } = useSelectedTrailer();

  return (
    <PreviewContainer>
      <h1>{trailer.title}</h1>
      <div style={{ display: 'flex' }}>
        <YouTube videoId={trailer.trailerId} opts={playerOptions} />
        <PreviewDescription>{trailer.description}</PreviewDescription>
      </div>
    </PreviewContainer>
  );
};

export default MoviePreview;
