import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const post = await prisma.post.create({
    data: {
      title: "some title 1",
      body: "some body 1",
      // i am getting error here photos : [{height: 1,width : 2, url : "xxx"}]
    },
  });
  console.log(post);
}

main();
console.log("script finished");
