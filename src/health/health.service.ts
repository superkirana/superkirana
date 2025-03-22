import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../auth/entities/user.entity';

@Injectable()
export class HealthService {
  constructor(
    // Inject the TypeORM connection to run raw queries.
    private readonly connection: Connection,
    // Inject the User repository to fetch sample data.
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Execute a raw SQL query to get the current database time.
  async getDatabaseTime(): Promise<string> {
    const result = await this.connection.query('SELECT NOW() as now');
    return result[0].now;
  }

  // Return a sample user record from the database.
  async getSampleUser(): Promise<User> {
    const user = await this.userRepository.findOne({
        where: {},
      });
        return user || {
      id: 'none',
      name: 'No user found',
      email: '',
      mobile: '',
      password: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    } as User;
  }
}
