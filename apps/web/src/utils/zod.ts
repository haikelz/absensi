import { z } from "zod";

export const absenceSchema = z.object({
  nim: z.string().length(10, {
    message: "NIM harus pas 10 angka, tidak lebih dan tidak kurang!",
  }),
});

export const signInAdminSchema = z.object({
  username: z
    .string()
    .min(4, { message: "Username tidak boleh kurang dari 4 huruf!" }),
  password: z
    .string()
    .min(6, { message: "Password tidak boleh kurang dari 6 huruf!" }),
});

export const signInStudentSchema = z.object({
  nim: z.string().length(10, {
    message: "NIM harus pas 10 angka, tidak lebih dan tidak kurang!",
  }),
});
