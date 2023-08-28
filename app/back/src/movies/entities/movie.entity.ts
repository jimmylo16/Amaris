import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  movieId: string;
  @Column('boolean')
  adult: boolean;
  @Column('text')
  backdrop_path: string;
  @Column('number', { array: true })
  genre_ids: number[];
  @Column('number')
  id: number;
  @Column('text')
  original_language: string;
  @Column('text')
  original_title: string;
  @Column('text')
  overview: string;
  popularity: number;
  @Column('text')
  poster_path: string;
  @Column('text')
  release_date: string;
  @Column('text')
  title: string;
  @Column('boolean')
  video: boolean;
  @Column('number')
  vote_average: number;
  @Column('number')
  vote_count: number;
}
