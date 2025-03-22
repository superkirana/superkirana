import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  // GET /dashboard/overview
  @Get('overview')
  async getOverview() {
    return this.dashboardService.getOverview();
  }
}
