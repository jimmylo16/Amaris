import { useGetMovieDetail } from "@/hooks";
import { Movies } from "@/interfaces/Movies";
import Image from "next/image";
import { useRouter } from "next/router";

type MovieDetailProps = {
  movieId: string;
};
export const MovieDetail = ({ movieId }: MovieDetailProps) => {
  console.log(movieId);
  const movieQuery = useGetMovieDetail(movieId);
  if (movieQuery.isLoading) {
    return <div>Loading...</div>;
  }
  const movieData = movieQuery.data;
  return (
    <div className="bg-slate-300  shadow-md p-2 cursor-pointer flex  flex-col sm:flex-row gap-5 items-center sm:items-start">
      {movieData && (
        <>
          <Image
            src={`https://image.tmdb.org/t/p/w200/${movieData.poster_path}`}
            width={150}
            height={150}
            alt="Picture of the author"
            className="rounded-lg  w-52 sm:text-center "
          />
          <section className="flex flex-col gap-2  justify-start p-2">
            <span className="break-all   text-ellipsis pb-2 text-blue-800 text-4xl text-left">
              {movieData.title}
            </span>
            <span className="font-bold text-2xl">
              Overall vote: {movieData.vote_average}
            </span>
            <span className="font-bold text-xl">
              Original Lenguaje: {movieData.original_language}
            </span>
            <p className="break-all text-ellipsis text-xl">
              {movieData.overview}
            </p>
            <div className="font-bold flex gap-4 text-blue-600">
              {movieData.genres.map(({ name, id }) => {
                return <div key={id}>{name}</div>;
              })}
            </div>
            <div className="font-bold flex gap-4 text-blue-600">
              Produced In:
              {movieData.production_companies.map(({ name, id }) => {
                return <div key={id}>{name},</div>;
              })}
            </div>
          </section>
        </>
      )}
    </div>
  );
};
