import { createContext, useContext, useState } from 'react';

const DataContext = createContext({
    GAME_WIDTH: 30,
    Color:[],

  });
  
  const DataProvider = (props) => {
    const [GAME_WIDTH, setGAME_WIDTH] = useState(30);
    const [Color, setColor] =  useState(["gray", "black"]);
      
  
     
    
  
    return (
      <DataContext.Provider
        value={{
            GAME_WIDTH,
            Color,

        }}
        {...props}
      />
    );
  };
  
  function useData() {
    return useContext(DataContext);
  }
  
  export { DataProvider, useData};
  