import express,{ Request,Response } from "express";
import { HelloControler } from "@/controller/HelloControlles";
import { LogInfo } from "@/utils/logger";

//Router from express

let HelloRouter = express.Router();

HelloRouter.route('/')
    .get(async (req: Request, res:Response) =>{
        let name:any = req?.query?.name;
        LogInfo(`QUerry param: ${name}`);

        const controller:HelloControler =new HelloControler();

        const response = await controller.getMessage(name);

        return res.send(response);
    })

export default HelloRouter;