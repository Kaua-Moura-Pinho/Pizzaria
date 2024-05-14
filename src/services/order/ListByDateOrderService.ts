import prismaClient from "../../prisma";

interface orderRequest{
    id_order: string;
    date: string;
}

class ListByDateOrderService{
    async execute({id_order, date}:orderRequest){
        const order = await prismaClient.pedido.findMany({
            where:{
                id: id_order,
                atualizado_em: date
            }
        })
        return order;
    }
}

export {ListByDateOrderService}