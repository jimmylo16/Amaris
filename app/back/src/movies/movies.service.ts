import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}
  async create(userId: string, createMovieDto: CreateMovieDto) {
    const movie = this.movieRepository.create({
      ...createMovieDto,
      userId: userId,
    });
    await this.movieRepository.save(movie);
    return movie;
  }
}
