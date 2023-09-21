const { Client } = require("pg");
async function main() {
  const client = new Client({
    connectionString: "postgresql://postgres:password@localhost:5432/new",
  });
  await client.connect();
  try {
    await client.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
  } catch (e) {
    console.log(e);
  }

  await client.end();
}
main();
