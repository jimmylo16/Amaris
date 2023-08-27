import { Register } from "@/components/Register";
import { MovieList } from "@/components/movies/MovieList";
import { TvSeriesList } from "@/components/tvSeries/TvSeriesList";
import { useGlobalState } from "@/hooks/useGlobalContext";

export default function Home() {
  const { view } = useGlobalState();
  console.log(view);
  if (view === "movies") {
    return <MovieList />;
  }
  if (view === "series") {
    return <TvSeriesList />;
  }
  if (view === "register") {
    return <Register />;
  }

  return <></>;
}
