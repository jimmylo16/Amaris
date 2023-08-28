import { useGlobalState } from "@/hooks/useGlobalContext";
import { TvSeries } from "@/interfaces";
import { addToFav } from "@/services/addToFav";
import Image from "next/image";
import { useRouter } from "next/router";

type TvSeriesCardProps = {
  tvResult: TvSeries.Result;
};
export const TvSeriesCard = ({ tvResult }: TvSeriesCardProps) => {
  const router = useRouter();
  const { isLogged } = useGlobalState();
  const handleClick = (id: number) => {
    router.push(`/tvSerie/${id}`);
  };
  const handleAddToFav = async () => {
    // const response = await addToFav(tvResult);
  };
  return (
    <div
      className="bg-slate-300  shadow-md p-2 cursor-pointer flex  flex-col sm:flex-row gap-5 items-center sm:items-start"
      onClick={() => handleClick(tvResult.id)}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w200/${tvResult.poster_path}`}
        width={150}
        height={150}
        alt="Picture of the author"
        className="rounded-lg  w-52 sm:text-center "
      />
      <section className="flex flex-col gap-2  justify-start p-2">
        <div className="flex  justify-between">
          <span className="break-all   text-ellipsis pb-2 text-blue-800 text-4xl text-left">
            {tvResult.name}
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
        <span className="font-bold text-2xl">
          Overall vote: {tvResult.vote_average}
        </span>
        <span className="font-bold text-xl">
          Original Lenguaje: {tvResult.original_language}
        </span>
        <p className="break-all text-ellipsis text-xl">{tvResult.overview}</p>
      </section>
    </div>
  );
};
