import Head from 'next/head';
import Navbar from 'components/Navbar';

const Quiz = () => {
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
      <Navbar />
      This is going to be a quiz game
    </>
  );
};

export default Quiz;
