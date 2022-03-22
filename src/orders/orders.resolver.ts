import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Order } from './entities/order.entity.';
import { OrderService } from './orders.service';
import { CreateOrderInput, CreateOrderOutput } from './dtos/created-order.dto';
import { AuthUser } from '../auth/auth-user.decorator';
import { User } from '../users/entities/user.entity';
import { Role } from '../auth/role.decorator';

@Resolver((of) => Order)
export class OrdersResolver {
  constructor(private readonly orderService: OrderService) {}

  @Mutation((returns) => CreateOrderOutput)
  @Role(['Client'])
  async createOrder(
    @AuthUser() customer: User,
    @Args('input') createOrderInput: CreateOrderInput,
  ): Promise<CreateOrderOutput> {
    return this.orderService.createOrder(customer, createOrderInput);
  }
}
