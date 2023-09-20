This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
Built using NextJs with Typescript for the backend, NextJs with Javascript for the front end, PostgreSQL for the database, Prisma as an ORM, with tailwindcss and material ui as additional libraries.

## Getting Started

**First, create a postgreSQL database** where you would like to store the employee data.  

To establish connection, 

1. Open the .env.enviroment file
2. replace the variable DATABASE_URL with the database connection string for the database we just created
   * This string is in form "postgresql://<username>:<password>@<host>:<port_number>/<db_name>"
   * replace the values in the < > brackets with the corresponding fields. this is what the whole line should look like
   * DATABASE_URL="postgresql://postgres:password@localhost:5432/test2"
3. Change the name of the file from .env.enviroonment to just .env
4. Run
   ```
   npm run setup_db
   ```
5. then run

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
