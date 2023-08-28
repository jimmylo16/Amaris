import { useGetTvSeriesDetail } from "@/hooks";
import Image from "next/image";

type TvSeriesDetailProps = {
  tvSerieId: string;
};
export const TvSeriesDetail = ({ tvSerieId }: TvSeriesDetailProps) => {
  const tvSerieQuery = useGetTvSeriesDetail(tvSerieId);
  if (tvSerieQuery.isLoading) {
    return <div>Loading...</div>;
  }
  const tvSerieData = tvSerieQuery.data;
  return (
    <div className="bg-slate-300  shadow-md p-2 cursor-pointer flex  flex-col sm:flex-row gap-5 items-center sm:items-start">
      {tvSerieData && (
        <>
          <Image
            src={`https://image.tmdb.org/t/p/w200/${tvSerieData.poster_path}`}
            width={150}
            height={150}
            alt="Picture of the author"
            className="rounded-lg  w-52 sm:text-center "
          />
          <section className="flex flex-col gap-2  justify-start p-2">
            <span className="break-all   text-ellipsis pb-2 text-blue-800 text-4xl text-left">
              {tvSerieData.name}
            </span>
            <span className="font-bold text-2xl">
              Overall vote: {tvSerieData.vote_average}
            </span>
            <span className="font-bold text-xl">
              Original Lenguaje: {tvSerieData.original_language}
            </span>
            <p className="break-all text-ellipsis text-xl">
              {tvSerieData.overview}
            </p>
            <div className="font-bold flex gap-4 text-blue-600">
              {tvSerieData.genres.map(({ name, id }) => {
                return <div key={id}>{name}</div>;
              })}
            </div>
            <div className="font-bold flex gap-4 text-blue-600">
              Produced In:
              {tvSerieData.production_companies.map(({ name, id }) => {
                return <div key={id}>{name},</div>;
              })}
            </div>
          </section>
        </>
      )}
    </div>
  );
};
