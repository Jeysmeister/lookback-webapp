import { z } from "zod";
import UserRegisterSchema from "./UserRegisterSchema";

type TUserRegisterSchema = z.infer<typeof UserRegisterSchema>;

export default TUserRegisterSchema;
