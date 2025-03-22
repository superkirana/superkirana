<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

# SuperKirana Backend

## Project Overview

The SuperKirana backend is built using the NestJS framework and TypeScript with TypeORM. It serves as the API for a retail management application. This project includes modules for authentication, user management, inventory, point-of-sale transactions, dashboard analytics, customer management, shopping cart operations, and system health checks.

## Project Structure

Each component is organized into its own folder under the `/src` directory. The following provides a deep explanation including file and folder paths:

### /Users/gaurav/WORK/superkirana/s-uperkirana/src/
- Contains the source code for the backend application.

#### /src/auth/
- **Files:**
  - **auth.module.ts** – Configures the Auth module, importing Passport, JwtModule, and registering strategies.
  - **auth.controller.ts** – Defines endpoints:
    - `/auth/register` for user registration.
    - `/auth/login` for local authentication.
    - `/auth/google-signin` for OAuth sign in.
    - `/auth/refresh` for token refreshing.
    - `/auth/google-mobile` for mobile OAuth login.
  - **auth.service.ts** – Implements registration, login, password hashing (using bcrypt), and Google OAuth sign-in.
  - **/strategies/**
    - **local.strategy.ts** – Validates local user credentials.
    - **jwt.strategy.ts** – Validates JWTs to protect routes.
    - **google.strategy.ts** – Integrates Google OAuth.
  - **/dto/** (e.g., register.dto.ts, login.dto.ts, google-signin.dto.ts, verify-otp.dto.ts, send-otp.dto.ts)
  - **/entities/**
    - **user.entity.ts** – Defines the User schema and database model.

#### /src/user/
- **Files:**
  - **user.module.ts**, **user.controller.ts**, **user.service.ts** – Manage user profile retrieval and updates.
  - **/dto/**
    - **update-profile.dto.ts** – Structures the data for modifying a user's profile.

#### /src/inventory/
- **Files:**
  - **inventory.module.ts**, **inventory.controller.ts**, **inventory.service.ts** – Handle products and stock management.
  - **/entities/**
    - **inventory.entity.ts** – Defines the product model in the database.

#### /src/pos/
- **Files:**
  - **pos.module.ts**, **pos.controller.ts**, **pos.service.ts** – Implement point-of-sale transactions.
  - **/dto/**
    - **create-transaction.dto.ts** – Data transfer for creating a transaction.
    - **transaction-item.dto.ts** – Details each item in a transaction.
  - **/entities/**
    - **transaction.entity.ts** – Models transaction records.

#### /src/dashboard/
- **Files:**
  - **dashboard.module.ts**, **dashboard.controller.ts**, **dashboard.service.ts** – Provide analytic endpoints such as `/dashboard/overview` which returns sales, inventory, and transaction metrics.

#### /src/customer/
- **Files:**
  - **customer.module.ts**, **customer.controller.ts**, **customer.service.ts** – Manage customer data.
  - **/dto/**
    - **create-customer.dto.ts** – Structure for creating a new customer.
  - **/entities/**
    - **customer.entity.ts** – Customer data model.

#### /src/cart/
- **Files:**
  - **cart.module.ts**, **cart.controller.ts**, **cart.service.ts** – Handle shopping cart operations.
  - **/dto/**
    - **add-to-cart.dto.ts** – Data for adding items to the cart.
    - **cart-item.dto.ts** – Schema for each cart item.
    - **update-cart-item.dto.ts** – For updating an item's quantity.
    - **checkout.dto.ts** – Data for processing a checkout.
  - **/entities/**
    - **cart.entity.ts** – Represents a shopping cart.
    - **cart-item.entity.ts** – Represents individual items in a cart.

#### /src/health/
- **Files:**
  - **health.module.ts**, **health.controller.ts**, **health.service.ts** – Expose endpoints for system health checks and database time/sample data.

#### /src/config/
- **Files:**
  - **configuration.ts** – Central configuration, setting up application variables like port, JWT secret, Google OAuth parameters, and database credentials.

#### Other Important Files
- **/src/app.module.ts** – Aggregates and imports all modules.
- **/src/main.ts** – Bootstraps the application.
- **tsconfig.json** & **tsconfig.build.json** – TypeScript settings.
- **package.json** – Lists dependencies and scripts.
- **/mermaid_diagram.md** – Contains a visual Mermaid diagram illustrating the project’s architecture.

## Detailed Documentation per Module

### Auth Module (/src/auth/)
- **Module & Controller:**  
  The Auth module (auth.module.ts) registers Passport strategies and JwtModule.  
  The controller (auth.controller.ts) exposes endpoints for user registration, login, and OAuth callbacks.
- **Service & Strategies:**  
  The auth.service.ts handles password hashing, token generation, and integration with OAuth providers.  
  Local, JWT, and Google strategies enforce authentication and authorization.
- **DTOs/Entities:**  
  Clear DTOs ensure proper validation. The user.entity.ts defines how user data is stored.

### User Module (/src/user/)
- Provides endpoints for profile viewing (`GET /user/profile`) and editing (`PUT /user/profile`).

### Inventory Module (/src/inventory/)
- Manages products with endpoints for listing inventory and adding new products.

### POS Module (/src/pos/)
- Offers transaction creation and retrieval functionality with a focus on point-of-sale operations.

### Dashboard Module (/src/dashboard/)
- Aggregates business metrics and provides a quick overview of business performance.

### Customer Module (/src/customer/)
- Handles creation and retrieval of customer records.

### Cart Module (/src/cart/)
- Enables shopping cart management: addition, update, deletion, and checkout of cart items.

### Health Module (/src/health/)
- Exposes endpoints to confirm the system’s operational status and database connectivity.

### Configuration (/src/config/)
- Centralizes configuration settings accessible globally across the application.

## Running the Application

1. **Installation:**
```bash
npm install
```

2. **Development:**
```bash
npm run start:dev
```

3. **Production:**
```bash
npm run start:prod
```

4. **API Endpoint:**  
Access the API at [http://localhost:3000/api](http://localhost:3000/api)

## Testing

Run unit tests:
```bash
npm run test
```

Run end-to-end tests:
```bash
npm run test:e2e
```

## Deployment

For production deployment, refer to the [NestJS Deployment Documentation](https://docs.nestjs.com/deployment).

## Additional Resources

- **NestJS Documentation:** https://docs.nestjs.com  
- **Project Architecture:** See [mermaid_diagram.md](/Users/gaurav/WORK/superkirana/s-uperkirana/mermaid_diagram.md) for a detailed visual overview.
