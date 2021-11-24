import Row from 'components/Row';
import Navbar from 'components/Navbar';
import { fetchMovieResults } from './api/movies';
import SelectedTrailerContext from 'contexts/SelectedTrailerContext';
import SelectedTrailerProvider from 'contexts/SelectedTrailerProvider';

export const getServerSideProps = async () => {
  const movieResults = await fetchMovieResults();

  return { props: { genres: movieResults } };
};

const Home = ({ genres }) => {
  return (
    <>
      <SelectedTrailerProvider>
        <Navbar />
        <div
          style={{
            paddingRight: '16px',
            paddingLeft: '16px',
            maxWidth: '3132px',
            margin: 'auto',
          }}>
          {genres?.map((genre) => (
            <Row dataSource={genre} key={genre.name} />
          ))}
        </div>
      </SelectedTrailerProvider>
    </>
  );
};

export default Home;
