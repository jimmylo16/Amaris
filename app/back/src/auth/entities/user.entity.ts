import { Movie } from 'src/movies/entities/movie.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
  })
  email: string;

  @Column('text', {
    select: false,
  })
  password: string;

  @Column('text')
  fullName: string;

  @OneToMany(() => Movie, (movie) => movie.favoriteMoviesId)
  favoriteMoviesId?: Movie[];
}
