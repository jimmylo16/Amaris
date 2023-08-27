import { Movies } from "@/interfaces/Movies";
import Image from "next/image";

type MovieCardProps = {
  movieResult: Movies.Result;
};
export const MovieCard = ({ movieResult }: MovieCardProps) => {
  return (
    <div className="bg-slate-300  shadow-md p-2 cursor-pointer flex  flex-col sm:flex-row gap-5 items-center sm:items-start">
      <Image
        src={`https://image.tmdb.org/t/p/w200/${movieResult.poster_path}`}
        width={150}
        height={150}
        alt="Picture of the author"
        className="rounded-lg  w-52 sm:text-center "
      />
      <section className="flex flex-col gap-2  justify-start p-2">
        <span className="break-all   text-ellipsis pb-2 text-blue-800 text-4xl text-left">
          {movieResult.title}
        </span>
        <span className="font-bold text-2xl">
          Overall vote: {movieResult.vote_average}
        </span>
        <span className="font-bold text-xl">
          Original Lenguaje: {movieResult.original_language}
        </span>
        <p className="break-all text-ellipsis text-xl">
          {movieResult.overview}
        </p>
      </section>
    </div>
  );
};
