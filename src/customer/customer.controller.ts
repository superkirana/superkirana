import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  // POST /customer
  @Post()
  async addCustomer(@Body() dto: CreateCustomerDto) {
    return this.customerService.addCustomer(dto);
  }

  // GET /customer/:customerId
  @Get(':customerId')
  async getCustomer(@Param('customerId') customerId: string) {
    return this.customerService.getCustomer(customerId);
  }
}
