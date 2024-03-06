

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
 
@Entity()
export class Data {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    data: string; 

}