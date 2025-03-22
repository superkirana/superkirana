import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventory } from './entities/inventory.entity';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Inventory)
    private readonly inventoryRepository: Repository<Inventory>,
  ) {}

  async getInventory() {
    return this.inventoryRepository.find();
  }

  async addItem(data: { name: string; quantity: number; price: number }) {
    const item = this.inventoryRepository.create(data);
    await this.inventoryRepository.save(item);
    return { message: 'Item added successfully', id: item.id };
  }
}
