// import exampleUserCreateService from "@modules/test/services/example.service";
// import { Request, Response } from "express";
// import { formatteAPI } from "@helpers/apiFormater";
// import { User } from "@modules/types/user.type";



// export default async function exampleUserCreationHandler(req: Request, res: Response) {
//   try {
//         const data: User = req.body;
        
//         const usr = await exampleUserCreateService(data)

//         return res.status(200).json(formatteAPI(200, "User created", usr))

//   } catch (e: any) {
//         if (e.code === "P2002") {
//             return res
//             .status(409)
//             .json(formatteAPI(409, "User already exists"));
//         }

//         return res
//           .status(500)
//           .json(formatteAPI(500, "Failed to create perfume"));

//   }
// }