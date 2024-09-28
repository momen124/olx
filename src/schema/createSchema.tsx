import { z } from "zod"; // Importing the Zod library

// Defining the validation schema for the create form using Zod
const createSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }) // Validate the minimum length of the name
    .max(50, { message: "Name cannot exceed 50 characters" }) // Validate the maximum length of the name
    .nonempty({ message: "Name is required" }), // Validate that the name is not empty

  email: z
    .string()
    .email({ message: "Invalid email address" }) // Validate the format of the email
    .nonempty({ message: "Email is required" }), // Validate that the email is not empty

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }) // Validate the minimum length of the password
    .nonempty({ message: "Password is required" }), // Validate that the password is not empty

  confirmPassword: z
    .string()
    .nonempty({ message: "Please confirm your password" }) // Validate that the confirm password field is not empty
    .refine((val, ctx) => val === ctx.parent.password, { // Validate that the password and confirm password match
      message: "Passwords must match",
      path: ["confirmPassword"], // Specify the path of the field to customize the error message
    }),
});

export default createSchema; // Exporting the schema
