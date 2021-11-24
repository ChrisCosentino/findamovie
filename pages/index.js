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
