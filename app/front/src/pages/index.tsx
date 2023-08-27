import { Register } from "@/components/Register";
import { MovieList } from "@/components/movies/MovieList";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      {/* <Register /> */}
      <MovieList />
    </main>
  );
}
