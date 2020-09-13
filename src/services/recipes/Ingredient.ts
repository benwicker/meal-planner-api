import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Recipe } from "./Recipe";

@Entity()
export class Ingredient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => Recipe, recipe => recipe.ingredients, {
        onDelete: "CASCADE"
    })
    recipe: Recipe;
}