import { TsetView, views } from "../GlobalContext";

type HeaderProps = {
  setView: TsetView;
};
export const Header = ({ setView }: HeaderProps) => {
  const handleView = (view: views) => {
    setView(view);
  };
  return (
    <nav className="flex-no-wrap top-0 flex w-full items-center justify-between bg-slate-300 py-4 shadow-md shadow-black/5 sticky px-12">
      <section className="flex items-center gap-4">
        <span className="text-2xl font-bold text-blue-800">Movie App</span>
        <div className="gap-4 flex">
          <span
            className="text-xl font-bold text-blue-700"
            onClick={() => handleView("movies")}
          >
            Movies
          </span>
          <span
            className="text-xl font-bold text-blue-700"
            onClick={() => handleView("series")}
          >
            Series
          </span>
        </div>
      </section>
      <section className="flex items-center gap-4">
        <span
          className="text-xl font-bold text-blue-700"
          onClick={() => handleView("login")}
        >
          Login
        </span>
        <span
          className="text-xl font-bold text-blue-700"
          onClick={() => handleView("register")}
        >
          Register
        </span>
      </section>
    </nav>
  );
};
