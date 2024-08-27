const { z } = require("zod");

const signupSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: " Name must be at least 3 characters" })
        .max(255, { message: " Password must be at least 255 characters" }),

    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: " Email must be at least 3 characters" })
        .max(255, { message: " Password must be at least 255 characters" }),

    phone: z
        .string({ required_erroe: "Phone is required" })
        .trim()
        .min(10, { message: " Phone must be at least 10 characters" })
        .max(20, { message: "Phone no. must be at least 20 characters" }),

    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(8, { message: " Password must be at least 8 characters" })
        .max(500, { message: "Password can't be greater than 500 characters" })

});

module.exports = signupSchema;