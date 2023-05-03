import {Request, Response} from "express";
import dataSource from "../utils";
import {Wilder} from "../entity/Wilder";
const wilderController = {
create: async (req: Request, res: Response) => {
try{
    await dataSource
    .getRepository(Wilder)
    .save(req.body);
    res.send ("Created wilder");
    }
catch (error) {
    console.log(error);
res.send ("Error while creating wilder");
}
},
read: async (req: Request, res: Response) => {
    try {
        const data = await dataSource.getRepository(Wilder).find();
        res.send (data); 
    }
    catch (error) {
        console.log(error);
        res.send("Error in the display of Wilders");
    };
},
update:  async (req: Request, res: Response) => {
try {
    await dataSource
    .getRepository(Wilder)
    .update(req.body.id, req.body.newData)
        res.send ("Update a wilder");
}
catch(error) {
    console.log(error);
    res.send ("Error wile creating wilder");
};
    },
delete:  async (req: Request, res: Response) => {
try {
    await  dataSource
    .getRepository(Wilder)
    .delete(req.body)
    res.send("Delete a wilder");
}
catch (error) {
    res.send ("Error while creating wilder");
};
    },

};

export default wilderController;