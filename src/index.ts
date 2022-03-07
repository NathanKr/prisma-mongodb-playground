import { PrismaClient } from "@prisma/client";
import { mainModule } from "process";
const prisma = new PrismaClient();

async function main() {
  const post = await prisma.post.create({
    data: {
      title: "some title 1",
      body: "some body 1",
    },
  });
  console.log(post);
}

main();
console.log("script finished");
