import { Request, Response } from "express";
import CloseOrderService from "../../services/order/CloseOrderService";

export default class CloseOrderController{
    async handle(req:Request, res:Response){
        const id = req.query.id as string;
        const closeOrderService = new CloseOrderService();
        const total =  await closeOrderService.execute(id);
        return res.json(total);
    }
}