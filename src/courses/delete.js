import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    const result = await prisma.courses.delete({
        where: {
            id: "5c1a7263-10f8-4018-a1a5-6cf07a222bf1"
            
        }
    })

    console.log(result)

}

main()
