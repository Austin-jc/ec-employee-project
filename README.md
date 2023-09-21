This project was based off a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
Built using Nextjs backend, Nextjs/React for frontend, PostgreSQL for the database, Prisma as an ORM, with [Tailwind CSS](https://tailwindcss.com/) and [Material UI](https://mui.com/) as additional libraries. Used Typescript for the backend, Javascript for the front end.

## Getting Started

**First, create a postgreSQL database** where you would like to store the employee data.

**To establish connection we first must set the database connection string in the environment variables**

1. Open the .env.enviroment file
2. replace the variable DATABASE_URL with the database connection string for the database we just created
   - This string is in form `postgresql://<username>:<password>@<host>:<port_number>/<db_name>`
   - replace the values in the < > brackets with the corresponding fields. This is what the whole line should look like:
     `DATABASE_URL="postgresql://postgres:password@localhost:5432/test2"`
3. Change the name of the file from .env.environment to just .env

4. With the new environment variable, we can now either setup using Prisma, or we can run a sql script (in something like PGAdmin).

For prisma:

```
npm run setup_db
```

To run the SQL script:

- Copy the sql script in the `setup_db.sql` file
- This can be run in PGAdmin in the query tool
  ![Alt text](readme_assets/image-8.png)

- If you setup via SQL script will need to run `npm install` to download the required node modules.

5. With the database set up we can then run

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

to start the server. In this project, Nextjs combines both frontend and backend so there is only one server to run.

## The App

When visiting the page, this will be the screen shown.
![Alt text](readme_assets/image-1.png?raw=true)

On load, the page pulls Employee info from the database and renders it in a table as shown above. Each row represents an employee's information.

We can delete a user from the table and the database by clicking on the delete button
![Alt text](readme_assets/image-2.png?raw=true)

And we can edit a user in-table by clicking the edit button
![Alt text](readme_assets/image-3.png?raw=true)

To edit, simply type inside the text boxes. First Name and Last Name will accept all characters, Salary will accept only numbers (including decimals)\*.

Lastly we can add a new user by clicking the "Add User" button on the bottom left
![Alt text](readme_assets/image-4.png?raw=true)

This will launch a Modal where you can fill in user details.
![Alt text](readme_assets/image-5.png?raw=true)

To leave the modal without adding a user, either click outside the modal (the gray area) or click on the "Close" button. To Create a user, click on the "Create" button.

One last additional fun feature - DarkMode!
![Alt text](readme_assets/image-6.png?raw=true)
To enable DarkMode, just click on the icon at the top left. It will toggle the two modes!
![Alt text](readme_assets/image-7.png?raw=true)
