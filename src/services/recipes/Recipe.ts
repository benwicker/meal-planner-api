import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable } from "typeorm";
import { Ingredient } from "./Ingredient";

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

    @Column()
    directions: string;

    @OneToMany(type => Ingredient, ingredient => ingredient.recipe, {
        cascade: true,
    })
    @JoinTable()
    ingredients: Ingredient[];
}