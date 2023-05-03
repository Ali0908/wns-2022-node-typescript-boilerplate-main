import {Request, Response} from "express";
import dataSource from "../utils";
import {Wilder} from "../entity/Wilder";
import {Grade} from "../entity/Grade";

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
    const grades = await dataSource.getRepository(Grade).find();
    console.log(grades);

    const wilders = await dataSource.getRepository(Wilder).find();
    console.log("wilders", wilders);

    const data = wilders.map((wilder) => {
        const wilderGrades = grades.filter(
            (grade) => grade.wilder.id === wilder.id
        );
        const wilderGradeLean = wilderGrades.map((el) => {
            return { title: el.skill.name, votes: el.grade};
        });
        const result = {
            ...wilder,
            skills: wilderGradeLean,
        }
        console.log(result);
        return result
    });
    res.send(data)

} catch(error) {
        console.log(error)
        res.send("Error while creating wilder");
    }
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