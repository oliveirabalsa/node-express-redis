import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsEnum,
  Min,
  Max,
} from "class-validator";

export enum Gender {
  M = "Masculino",
  F = "Feminino",
}

@Entity("user")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @Column()
  @IsNotEmpty()
  @Min(18)
  @Max(100)
  @IsNumber({ maxDecimalPlaces: 3 })
  age: number;

  @Column()
  @IsEnum(Gender, {
    message: "Gender must be a valid enum: ['Masculino', 'Feminino']",
  })
  gender: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { User };
