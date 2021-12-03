import Row from 'components/Row';
import Navbar from 'components/Navbar';
import { fetchMovieResults } from './api/movies';
import Head from 'next/head';
import SelectedTrailerProvider from 'contexts/SelectedTrailerProvider';

export const getServerSideProps = async () => {
  const movieResults = await fetchMovieResults();

  return { props: { genres: movieResults } };
};

const Home = ({ genres }) => {
  return (
    <>
      <Head>
        <title>Find A Movie</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content="Movie night and don't know what movie to watch? Find the perfect movie. Search by genre or take the quiz and let us do the hard work!"
        />
      </Head>
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
