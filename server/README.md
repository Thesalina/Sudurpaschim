# Sudurpashchim Server

Express + MongoDB backend for the Sudurpashchim MERN project.

## Endpoints

- `GET /api/health`
- `GET /api/destinations`
- `GET /api/destinations/:destinationId`
- `GET /api/culture`
- `GET /api/contact`
- `POST /api/contact`

## Setup

1. Copy `.env.example` to `.env`
2. Set `MONGODB_URI`
3. Install dependencies with `npm install`
4. Run `npm run dev`

## Seed

Use `npm run seed` to populate destination and culture collections.
