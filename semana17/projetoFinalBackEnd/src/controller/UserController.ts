//   public async getUserById(req: Request, res: Response) {
//     const id = req.params.id;
//     try {
//       const result = await UserController.UserBusiness.getUserById(id);

//       res.status(200).send({ result });
//     } catch (err) {
//       res.status(err.errorCode || 400).send({ message: err.message });
//     }
//   }

//   public async getAllUser(req: Request, res: Response) {
//     const token = req.headers.authorization;

//     try {
//       const result = await UserController.UserBusiness.getAllUser(
//         token as string
//       );
//     } catch (err) {
//       res.status(err.errorCode || 400).send({ message: err.message });
//     }
//   }
// }
