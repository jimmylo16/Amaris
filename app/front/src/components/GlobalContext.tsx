import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Header } from "./header/Header";

export type views =
  | "movies"
  | "series"
  | "login"
  | "register"
  | "detailMovie"
  | "detailSeries";
export type TsetView = contextDispatch<views>;

type contextDispatch<T> = Dispatch<SetStateAction<T>> | ((views: T) => void);
type ContextType = {
  view: views;
  setView: TsetView;
  setIsLogged: contextDispatch<boolean>;
  isLogged: boolean;
};
export const GlobalContext = createContext<ContextType>({
  view: "movies",
  setView: (views: views) => {},
  setIsLogged: (islogged: boolean) => {},
  isLogged: false,
});

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [view, setView] = useState<views>("movies");
  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);
  return (
    <GlobalContext.Provider value={{ setView, view, setIsLogged, isLogged }}>
      <Header setView={setView} />
      <main
        className={`flex min-h-screen flex-col items-center justify-between sm:px-24 sm:pt-8 `}
      >
        {children}
      </main>
    </GlobalContext.Provider>
  );
};
