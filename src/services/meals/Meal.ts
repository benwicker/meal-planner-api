import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Meal {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    day: Date;

    @Column()
    recipeId: number;
}