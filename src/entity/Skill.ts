import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import {Grade} from  "./Grade"
@Entity()
export class Skill {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @OneToMany(()  => Grade, (grade) => grade.skill)
    // pourquoi un tableau Grade
    public grades: Grade[]
}