import { Controller, Post, Body, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('favMovies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post('/:userId')
  create(
    @Param('userId') userId: string,
    @Body() createMovieDto: CreateMovieDto,
  ) {
    return this.moviesService.create(userId, createMovieDto);
  }
}
