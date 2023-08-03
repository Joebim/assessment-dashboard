import React, { createContext, useState } from 'react';

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <MenuContext.Provider value={{ isCollapse, setIsCollapse }}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuContext, MenuProvider };