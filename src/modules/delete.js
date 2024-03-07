import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    const result = await prisma.modules.delete({
        where:{
            id: '41a8ec3c-9284-47a8-9535-180aa2d16b2e'
        }
    })

    console.log(result)
}

main()