import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  // GET /health - returns a simple health check with database time
  @Get()
  async checkHealth() {
    const dbTime = await this.healthService.getDatabaseTime();
    return { status: 'ok', databaseTime: dbTime };
  }

  // GET /health/sample - returns a sample user record from the database
  @Get('sample')
  async getSampleData() {
    const sampleUser = await this.healthService.getSampleUser();
    return { sampleUser };
  }
}
