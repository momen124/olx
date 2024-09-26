import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; // Importing Zod resolver with React Hook Form
import createSchema from "../path/to/createSchema"; // Importing the validation schema

const CreateForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(createSchema), // Applying Zod schema for data validation
  });

  const onSubmit = (data) => {
    console.log(data); // Handling the data on submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input type="text" {...register("name")} /> {/* Name field */}
        {errors.name && <p>{errors.name.message}</p>} {/* Display error message */}
      </div>

      <div>
        <label>Email</label>
        <input type="email" {...register("email")} /> {/* Email field */}
        {errors.email && <p>{errors.email.message}</p>} {/* Display error message */}
      </div>

      <div>
        <label>Password</label>
        <input type="password" {...register("password")} /> {/* Password field */}
        {errors.password && <p>{errors.password.message}</p>} {/* Display error message */}
      </div>

      <div>
        <label>Confirm Password</label>
        <input type="password" {...register("confirmPassword")} /> {/* Confirm password field */}
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>} {/* Display error message */}
      </div>

      <button type="submit">Submit</button> {/* Submit button */}
    </form>
  );
};

export default CreateForm; // Exporting the form component
