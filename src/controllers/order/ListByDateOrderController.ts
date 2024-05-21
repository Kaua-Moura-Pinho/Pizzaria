import { Request, Response } from "express";
import { ListByDateOrderService } from "../../services/order/ListByDateOrderService";

class ListByDateOrderController{
    async handle(req: Request, res: Response){
        const status = req.query.id as string;
        const date = req.query.atualizado_em as string;
        const listByDate = new ListByDateOrderService();
        const order = await listByDate.execute({date, status});
        return res.json(order);
    }
}

export {ListByDateOrderController}