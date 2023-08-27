export interface TFetchFailed {
  status_code: number;
  status_message: string;
  success: boolean;
}

export type PopularMoviesFailed = AxiosError<TFetchFailed>;
export type PopularTvSeriesFailed = AxiosError<TFetchFailed>;
