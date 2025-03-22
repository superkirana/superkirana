import { Controller, Get, Post, Body } from '@nestjs/common';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  // GET /inventory
  @Get()
  async getInventory() {
    return this.inventoryService.getInventory();
  }

  // POST /inventory
  @Post()
  async addItem(@Body() body: { name: string; quantity: number; price: number }) {
    return this.inventoryService.addItem(body);
  }
}
