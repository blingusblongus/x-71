# X-71 Asteroid Interceptor

A simple API to fetch near-miss asteroid data from NASA.

## Prerequisites

- node
- npm

## Getting Started

- Clone Repo
- `npm i` to install dependencies
- In project root, add `.env` file with `NASA_API_KEY=<your-api-key>`
- `npm run dev` or `npm run build && npm start`

## Usage

This API endpoint accepts three required query parameters: `start_date` and `end_date` (in "yyyy-mm-dd" format), and `distance` (assumed to be in km). Example: `localhost:3000/?start_date=2019-01-01&end_date=2019-01-07&distance=9000000` 

## Limitations

- The maximum distance between `start_date` and `end_date` is 7 days. 

## Room For Improvement

- Containerize
- Swagger
- Check 7-day difference before sending to NASA API
