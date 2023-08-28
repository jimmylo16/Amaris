import { User } from 'src/auth/entities/user.entity';
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from 'typeorm';

@Entity('favMovies')
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  favoriteMoviesId: string;
  @Column('boolean')
  adult: boolean;
  @Column('text')
  backdrop_path: string;
  @Column('integer', { array: true })
  genre_ids: number[];
  @Column('integer')
  id: number;
  @Column('text')
  original_language: string;
  @Column('text')
  original_title: string;
  @Column('text')
  overview: string;
  @Column('integer')
  popularity: number;
  @Column('text')
  poster_path: string;
  @Column('text')
  release_date: string;
  @Column('text')
  title: string;
  @Column('boolean')
  video: boolean;
  @Column('integer')
  vote_average: number;
  @Column('integer')
  vote_count: number;

  @ManyToOne(() => User, (user) => user.favoriteMoviesId)
  userId: string;
}
