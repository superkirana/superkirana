import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { CartItem } from './entities/cart-item.entity';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { CheckoutDto } from './dto/checkout.dto';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
    @InjectRepository(CartItem)
    private readonly cartItemRepository: Repository<CartItem>,
  ) {}

  async addToCart(customerId: string, dto: AddToCartDto) {
    let cart = await this.cartRepository.findOne({ where: { customerId }, relations: ['items'] });
    if (!cart) {
      cart = this.cartRepository.create({ customerId, items: [] });
      await this.cartRepository.save(cart);
    }
    // Create cart items from dto.items and add them
    for (const itemDto of dto.items) {
      // Validate manual entry if productId is not provided.
      if (!itemDto.productId && (!itemDto.productName || !itemDto.price)) {
        throw new BadRequestException('Product name and price are required for manual entry');
      }
      const cartItem = this.cartItemRepository.create({
        cart,
        ...itemDto,
      });
      await this.cartItemRepository.save(cartItem);
      cart.items.push(cartItem);
    }
    // Recalculate total (dummy calculation)
    cart.total = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    await this.cartRepository.save(cart);
    return { cartId: cart.id, customerId, items: cart.items, total: cart.total, message: `Cart updated for customer ${customerId}` };
  }

  async getCart(customerId: string) {
    const cart = await this.cartRepository.findOne({ where: { customerId }, relations: ['items'] });
    if (!cart) throw new NotFoundException(`Cart not found for customer ${customerId}`);
    return cart;
  }

  async updateCartItem(customerId: string, itemId: string, dto: UpdateCartItemDto) {
    const cart = await this.cartRepository.findOne({ where: { customerId }, relations: ['items'] });
    if (!cart) throw new NotFoundException(`Cart not found for customer ${customerId}`);
    const item = cart.items.find((i) => i.id === itemId);
    if (!item) throw new NotFoundException('Cart item not found');
    item.quantity = dto.quantity;
    await this.cartItemRepository.save(item);
    // Update total
    cart.total = cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    await this.cartRepository.save(cart);
    return { ...item, message: 'Cart item updated successfully' };
  }

  async removeCartItem(customerId: string, itemId: string) {
    const cart = await this.cartRepository.findOne({ where: { customerId }, relations: ['items'] });
    if (!cart) throw new NotFoundException(`Cart not found for customer ${customerId}`);
    const item = cart.items.find((i) => i.id === itemId);
    if (!item) throw new NotFoundException('Cart item not found');
    await this.cartItemRepository.delete(itemId);
    // Recalculate total
    cart.items = cart.items.filter((i) => i.id !== itemId);
    cart.total = cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    await this.cartRepository.save(cart);
    return { message: `Item ${itemId} removed from cart successfully`, cartId: cart.id, updatedTotal: cart.total };
  }

  async checkoutCart(customerId: string, dto: CheckoutDto) {
    const cart = await this.cartRepository.findOne({ where: { customerId }, relations: ['items'] });
    if (!cart) throw new NotFoundException(`Cart not found for customer ${customerId}`);
    // Here, process payment using dto.paymentMethod and dto.paymentDetails.
    // For demonstration, we assume success.
    return {
      transactionId: 'txn_789',
      customerId,
      cartId: cart.id,
      amount: cart.total,
      status: 'Success',
      paidAt: new Date().toISOString(),
      message: 'Checkout completed successfully',
    };
  }
}
