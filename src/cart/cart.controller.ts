import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { CartService } from './cart.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { CheckoutDto } from './dto/checkout.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  // POST /cart/:customerId - add to cart (both known product & manual)
  @Post(':customerId')
  async addToCart(@Param('customerId') customerId: string, @Body() dto: AddToCartDto) {
    return this.cartService.addToCart(customerId, dto);
  }

  // GET /cart/:customerId - get cart items
  @Get(':customerId')
  async getCart(@Param('customerId') customerId: string) {
    return this.cartService.getCart(customerId);
  }

  // PUT /cart/:customerId/item/:itemId - update a cart item
  @Put(':customerId/item/:itemId')
  async updateCartItem(
    @Param('customerId') customerId: string,
    @Param('itemId') itemId: string,
    @Body() dto: UpdateCartItemDto,
  ) {
    return this.cartService.updateCartItem(customerId, itemId, dto);
  }

  // DELETE /cart/:customerId/item/:itemId - remove an item
  @Delete(':customerId/item/:itemId')
  async removeCartItem(@Param('customerId') customerId: string, @Param('itemId') itemId: string) {
    return this.cartService.removeCartItem(customerId, itemId);
  }

  // POST /cart/:customerId/checkout - checkout cart
  @Post(':customerId/checkout')
  async checkoutCart(@Param('customerId') customerId: string, @Body() dto: CheckoutDto) {
    return this.cartService.checkoutCart(customerId, dto);
  }
}
