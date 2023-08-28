import { MovieList } from "@/components/movies/MovieList";
import { TvSeriesList } from "@/components/tvSeries/TvSeriesList";
import { useGlobalState } from "@/hooks/useGlobalContext";
import { useRouter } from "next/router";

export default function Home() {
  const { view } = useGlobalState();
  const router = useRouter();
  if (view === "movies") {
    return <MovieList />;
  }
  if (view === "series") {
    return <TvSeriesList />;
  }
  if (view === "register") {
    // return <Register />;
    router.push("/register");
  }
  if (view === "login") {
    // return <Register />;
    router.push("/login");
  }

  return <></>;
}
