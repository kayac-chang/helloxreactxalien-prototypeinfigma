import { useEffect, useState, createContext, useContext } from "react";

export default function initContext(func) {
  const Context = createContext();

  function Provider({ children }) {
    const [state, setState] = useState([]);

    useEffect(() => {
      func().then(setState);
    }, []);

    return <Context.Provider value={state}>{children}</Context.Provider>;
  }

  function useHook() {
    const value = useContext(Context);

    if (!value) {
      throw new Error(`useHook must be used within a Provider`);
    }

    return value;
  }

  return { Provider, useHook };
}
