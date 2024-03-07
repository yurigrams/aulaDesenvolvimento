import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    const result = await prisma.courses.update({
        where: {
            id: "5c1a7263-10f8-4018-a1a5-6cf07a222bf1"
        },
        data: {
            name: "Curso de prisma com fastyfy",
            duration: 200,
            description: "curso de ORM prisma"
        }
    })

    console.log(result)
}

main()