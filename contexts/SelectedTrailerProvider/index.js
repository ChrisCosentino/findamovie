import { useState } from 'react';
import SelectedTrailerContext from 'contexts/SelectedTrailerContext';

const SelectedTrailerProvider = ({ children }) => {
  const [trailer, setTrailer] = useState(null);
  const [row, setRow] = useState(null);

  const onChangeTrailer = (e, rowId) => {
    setTrailer(e);
    setRow(rowId);
  };

  return (
    <SelectedTrailerContext.Provider value={{ trailer, onChangeTrailer, row }}>
      {children}
    </SelectedTrailerContext.Provider>
  );
};

export default SelectedTrailerProvider;
