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
    router.push("/register");
  }
  if (view === "login") {
    router.push("/login");
  }

  return <></>;
}
