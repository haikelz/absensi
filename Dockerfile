FROM node:alpine AS build

COPY package.json pnpm-lock.yaml ./
COPY apps/web/package.json apps/web/pnpm-lock.yaml ./apps/web/

CMD ["pnpm", "run", "dev"]