import { useContext, createContext } from 'react';

const SelectedTrailerContext = createContext();

export const useSelectedTrailer = () => {
  const context = useContext(SelectedTrailerContext);

  if (context === undefined) {
    throw new Error(
      'useSelectedTrailer must be used within a SelectedTrailerContext provider'
    );
  }

  return context;
};

export default SelectedTrailerContext;
