import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  async getOverview() {
    // Dummy data; in production, aggregate real data.
    return {
      totalSales: 12000,
      inventoryCount: 45,
      todayTransactions: 8,
    };
  }
}
