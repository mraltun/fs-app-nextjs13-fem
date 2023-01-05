// Because Next api functions run in a serverless environment, we're going to cache our prisma client and reuse it when possible to avoid having too many connections.
import { PrismaClient } from "@prisma/client";

// TS. Disable eslint because if you try to use something in the global space that's not actually there, TS will freak out.
declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient;
}

// We are going to create prisma client instance and it's going to check if we already had one. If we already did then it gets that one, otherwise save in the global and return that one
let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;
