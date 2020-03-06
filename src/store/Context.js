import { createContext, useContext } from 'react';

const Context = createContext();

export const useAppContext = () => useContext(Context);

export default Context;
