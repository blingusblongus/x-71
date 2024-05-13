# X-71 Asteroid Interceptor

A simple API to fetch near-miss asteroid data from NASA.

## Prerequisites

- node v18+ (`fetch`)
- npm 

*or*

- Docker

## Getting Started

Without Docker:
- Clone Repo: `git clone https://github.com/blingusblongus/x-71 && cd x-71`
- `npm i` to install dependencies
- In project root, add `.env` file with `NASA_API_KEY=<your-api-key>`
- `npm run dev` or `npm run build && npm start`

With Docker:
- Clone Repo: `git clone https://github.com/blingusblongus/x-71 && cd x-71`
- In project root, add `.env` file with `NASA_API_KEY=<your-api-key>`
- With docker running, `docker compose up --build` to build the docker image and launch the program 

## Usage

This API endpoint accepts three required query parameters: 
- `start_date` and 
`end_date` (in "yyyy-mm-dd" format), and 
`within` (in kilometers). 

Example: `localhost:3000/?start_date=2019-01-01&end_date=2019-01-07&within=9000000` 

## Limitations

- The maximum distance between `start_date` and `end_date` is 7 days. 

## Room For Improvement

- [ ] Containerize
- [ ] Swagger
- [ ] Check 7-day difference before sending to NASA API
- [ ] Add function for drying up error generation
- [ ] Tests
