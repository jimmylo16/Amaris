import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
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
export type TsetView =
  | Dispatch<SetStateAction<views>>
  | ((views: views) => void);
type ContextType = {
  view: views;
  setView: TsetView;
};
export const GlobalContext = createContext<ContextType>({
  view: "movies",
  setView: (views: views) => {},
});

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [view, setView] = useState<views>("movies");
  return (
    <GlobalContext.Provider value={{ setView, view }}>
      <Header setView={setView} />
      <main
        className={`flex min-h-screen flex-col items-center justify-between sm:px-24 sm:pt-8 `}
      >
        {children}
      </main>
    </GlobalContext.Provider>
  );
};
