import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({});
const fs = require("fs");
const path = require("path");

async function main() {
  await prisma.employee.deleteMany();
  const filepath = path.resolve(__filename, "../data.json");
  fs.readFile(filepath, "utf8", async (error: Error, data: any) => {
    if (error) {
      console.error("error reading JSON file: ", error);
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      try {
        await prisma.employee.createMany({
          data: jsonData.employees,
        });
      } catch {
        console.error("Problem creating records while seeding");
      }
    } catch (error) {
      console.error("Error parsing JSON data:", error);
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
