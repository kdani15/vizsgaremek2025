import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateMovieInputDto {
  @IsString()
  title: string;

  @IsInt()
  releaseYear: number;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  posterImg?: string;

  @IsOptional()
  @IsString()
  thumbnailImg?: string;
}
