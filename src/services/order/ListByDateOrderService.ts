import prismaClient from "../../prisma";

class ListByDateOrderService{
    async execute({date, status}){

        let nextdate = new Date(date);
        nextdate.setDate(nextdate.getDate()+1)

        const order = await prismaClient.pedido.findMany({
            where:{
                status: status,
                atualizado_em:{
                    gte: new Date(date),
                    lt: nextdate
                }
            }
        })
        return order;
    }
}

export {ListByDateOrderService}