import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async addCustomer(dto: CreateCustomerDto) {
    const customer = this.customerRepository.create(dto);
    await this.customerRepository.save(customer);
    return { customerId: customer.id, message: 'Customer added successfully', ...customer };
  }

  async getCustomer(customerId: string) {
    const customer = await this.customerRepository.findOne({ where: { id: customerId } });
    if (!customer) {
      throw new NotFoundException('Customer not found');
    }
    return customer;
  }
}
