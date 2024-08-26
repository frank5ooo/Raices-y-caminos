import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import { LogSucces } from "@/utils/logger";

export class HelloControler implements IHelloController {
    
    public async getMessage(name?: string): Promise<BasicResponse> {
        LogSucces('[/api/hello] get Request');

        return{
            message: `Hello, ${name || "World!"}!`
        }


    }
    
}




