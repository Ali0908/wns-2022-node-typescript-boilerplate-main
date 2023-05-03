import dataSource from "../utils";
import {Skill} from "../entity/Skill";
import { Request, Response } from "express";


const skillController = {
    create: async (req: Request, res: Response) => {
        try{
            await dataSource
            .getRepository(Skill)
            .save(req.body);
            res.send ("Created skill");
            }
        catch (error) {
            console.log(error);
        res.send ("Error while creating wilder");
        }
        },
    read: async (req: Request, res: Response) => {
        try {
            const data = await dataSource.getRepository(Skill).find();
            res.send (data); 
        }
        catch (error) {
            console.log(error);
            res.send("Skills error");
        };
            },
    update:  async (req: Request, res: Response) => {
            try {
                await dataSource
                .getRepository(Skill)
                .update(req.body.id, req.body.newData);
                res.send ("Update a wilder");
            } catch(error) {
                console.log(error);
                res.send ("Error while creating wilder");
            };
                },
    delete:  async (req: Request, res: Response) => {
            try {
            await  dataSource
            .getRepository(Skill)
            .delete(req.body)
            res.send ("Delete a wilder");
            }
            catch (error) {
                console.log(error);
                res.send ("Error wile creating wilder");
            };
                },
            
    };
    export default skillController;