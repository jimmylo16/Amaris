import { TvSeriesDetail } from "@/components/tvSeries/TvSeriesDetail";
import { useRouter } from "next/router";

export default function TVSeriesPage() {
  const router = useRouter();
  return router.query.tvSerieId ? (
    <TvSeriesDetail tvSerieId={router.query.tvSerieId as string} />
  ) : null;
}
