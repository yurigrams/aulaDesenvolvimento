import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    const result = await prisma.modules.update({
        where: {
            id: '41a8ec3c-9284-47a8-9535-180aa2d16b2e'
        },
        data: {
            name: "Modulo Prisma 2",
            description: "modulos 2"
        }
    })

    console.log(result)

}

main()