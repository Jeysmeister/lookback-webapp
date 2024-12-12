import { z } from "zod";

const UserRegisterSchema = z.object({
  fname: z.string().min(1, "First Name is required"),
  lname: z.string().min(1, "Last Name is required"),
  email: z.string().min(1, "Email is required"),
  password: z.string().min(8, "Minimum of 8 characters is required"),
  dob: z.date(),
  regCode: z.string().min(1, "Region is required"),
  provCode: z.string().min(1, "Province is required"),
  citymunCode: z.string().min(1, "City/Municipality is required"),
  brgyCode: z.string().min(1, "BRGY. is required"),
  gender: z.string().min(1, "Gender is required"),
  covidStatus: z.string().min(1, "Covid Status is required"),
});

export default UserRegisterSchema;
