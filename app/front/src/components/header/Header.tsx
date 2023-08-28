import { useRouter } from "next/router";
import { TsetView, views } from "../GlobalContext";
import { useGlobalState } from "@/hooks/useGlobalContext";

type HeaderProps = {
  setView: TsetView;
};
export const Header = ({ setView }: HeaderProps) => {
  const router = useRouter();
  const { isLogged } = useGlobalState();
  const handleView = (view: views) => {
    setView(view);
    router.push("/");
  };
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    router.reload();
  };

  return (
    <nav className="flex-no-wrap top-0 flex w-full items-center justify-between bg-slate-300 py-4 shadow-md shadow-black/5 sticky px-12">
      <section className="flex items-center gap-4">
        <span className="text-2xl font-bold text-blue-800">Movie App</span>
        <div className="gap-4 flex">
          <span
            className="text-xl font-bold text-blue-700 cursor-pointer"
            onClick={() => handleView("movies")}
          >
            Movies
          </span>
          <span
            className="text-xl font-bold text-blue-700 cursor-pointer"
            onClick={() => handleView("series")}
          >
            Series
          </span>
        </div>
      </section>
      <section className="flex items-center gap-4">
        {!isLogged ? (
          <>
            <span
              className="text-xl font-bold text-blue-700 cursor-pointer"
              onClick={() => handleView("login")}
            >
              Login
            </span>
            <span
              className="text-xl font-bold text-blue-700 cursor-pointer"
              onClick={() => handleView("register")}
            >
              Register
            </span>
          </>
        ) : (
          <span
            className="text-xl font-bold text-blue-700 cursor-pointer"
            onClick={logOut}
          >
            Log-Out
          </span>
        )}
      </section>
    </nav>
  );
};
