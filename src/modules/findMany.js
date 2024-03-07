import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){

    const Modules = await prisma.modules.findMany({})

    console.log(Modules)

}

main()