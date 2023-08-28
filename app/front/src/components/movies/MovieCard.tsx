import { useGlobalState } from "@/hooks/useGlobalContext";
import { Movies } from "@/interfaces/Movies";
import { addToFav } from "@/services/addToFav";
import Image from "next/image";
import { useRouter } from "next/router";

type MovieCardProps = {
  movieResult: Movies.Result;
};
export const MovieCard = ({ movieResult }: MovieCardProps) => {
  const router = useRouter();
  const { isLogged } = useGlobalState();
  const userId = localStorage.getItem("userId");
  const handleClick = (id: number) => {
    router.push(`/movie/${id}`);
  };
  const handleAddToFav = async () => {
    if (userId) {
      const response = await addToFav(userId, movieResult);
    }
  };
  return (
    <div className="bg-slate-300  shadow-md p-2 cursor-pointer flex  flex-col sm:flex-row gap-5 items-center sm:items-start">
      <Image
        src={`https://image.tmdb.org/t/p/w200/${movieResult.poster_path}`}
        width={150}
        height={150}
        alt="Picture of the author"
        className="rounded-lg  w-52 sm:text-center "
        onClick={() => handleClick(movieResult.id)}
      />
      <section className="flex flex-col gap-2  justify-start p-2">
        <div className="flex  justify-between">
          <span className="break-all   text-ellipsis pb-2 text-blue-800 text-4xl text-left">
            {movieResult.title}
          </span>
          {isLogged && (
            <span
              className="material-symbols-outlined"
              onClick={handleAddToFav}
            >
              favorite
            </span>
          )}
        </div>
        <span
          className="font-bold text-2xl "
          onClick={() => handleClick(movieResult.id)}
        >
          Overall vote: {movieResult.vote_average}
        </span>
        <span
          className="font-bold text-xl"
          onClick={() => handleClick(movieResult.id)}
        >
          Original Lenguaje: {movieResult.original_language}
        </span>
        <p
          onClick={() => handleClick(movieResult.id)}
          className="break-all text-ellipsis text-xl"
        >
          {movieResult.overview}
        </p>
      </section>
    </div>
  );
};
