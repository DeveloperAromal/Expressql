import prisma from "../../../lib/prisma";
import { User } from "../../types/user.type";


export default async function exampleUserCreateService(data: User) {
  return prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.email,
    },
  });
}