import { INestApplication, Injectable } from "@nestjs/common";
import { z } from 'zod';
import { TrpcService } from "./trpc.service";
import * as trpcExpress from '@trpc/server/adapters/express';

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly trpc: TrpcService,
    // private readonly userService: UserService
  ) {}

  appRouter = this.trpc.router({
    hello: this.trpc.procedure
      .input(
        z.object({
          name: z.string().optional(),
        }),
      )
      .query(({ input }) => {
        const { name } = input;
        // return await this.userService.getUsers(name);
        return {
          greeting: `Hello ${name ? name : `Bob`}`,
        };
      }),
  });

  async applyMiddleWare(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({
        router: this.appRouter,
      }),
    );
  }
}

export type AppRouter = TrpcRouter[`appRouter`];