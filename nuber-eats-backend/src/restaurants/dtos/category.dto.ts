import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Category } from '../entities/category.entity';
import {
  PaginationInput,
  PaginationOutput,
} from '../../common/dtos/pagination.dto';
import { Restaurant } from '../entities/restaurant.entity';

@InputType()
export class CategoryInput extends PaginationInput {
  @Field((type) => String)
  slug: string;
}

/**
 *  CoreOuput 은 모둔 output 객체에 공통으로 들어가는 필드들을 담고있음
 */
@ObjectType()
export class CategoryOutput extends PaginationOutput {
  @Field((type) => [Restaurant], { nullable: true })
  restaurants?: Restaurant[];

  @Field((type) => Category, { nullable: true })
  category?: Category;
}
