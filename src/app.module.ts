import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { InventoryModule } from './inventory/inventory.module';
import { PosModule } from './pos/pos.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CustomerModule } from './customer/customer.module';
import { CartModule } from './cart/cart.module';
import { HealthModule } from './health/health.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // Global TypeORM configuration (PostgreSQL connection)
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: +(process.env.DB_PORT || 5432),
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'gaurav',
      database: process.env.DB_NAME || 'superkiranaDDBB',

      autoLoadEntities: true,
      synchronize: true, // For development only
    }),
    AuthModule,
    UserModule,
    InventoryModule,
    PosModule,
    DashboardModule,
    CustomerModule,
    CartModule,
    HealthModule, // <-- Add Health module here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
