import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Recipe {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    prepTime: string;

    @Column()
    cookTime: string;

    @Column()
    cookTemp: string;

    @Column()
    serves: string;
}