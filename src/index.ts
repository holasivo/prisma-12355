import { PrismaClient } from "@prisma/client";

const main = async () => {
  const prisma = new PrismaClient();
  await prisma.employee.create({
    data: {
      id: "324685ba-8feb-4482-8a5b-83ecd3515b17",
      department_id: "68005caf-c322-4112-9262-c3915b0b64aa",
      name: "Thelma Kelley",
      title: "Manager",
    },
  });
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
