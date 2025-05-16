"use server";

import { VisaEnum } from "@/types/Visa";
import { File } from "buffer";
import { z, ZodFormattedError } from "zod";

const FormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  linkedIn: z.string().url("Invalid URL"),
  visas: z.array(z.nativeEnum(VisaEnum)).min(1, "At least one visa option is required"),
  resume: z.instanceof(File).refine((file) => file.size <= 5 * 1024 * 1024, {
    message: "File size must be less than 5MB",
  }),
  additionalInfo: z.string().optional(),
});

type FormType = z.infer<typeof FormSchema>;

type FormState = {
  errors: ZodFormattedError<FormType> | null;
  success: boolean | null;
};

export async function handleSubmit(
  _: FormState,
  formData: FormData
): Promise<FormState> {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const linkedIn = formData.get("linkedIn");
  const visas = formData.getAll("visas");
  const resume = formData.get("resume");
  const additionalInfo = formData.get("additionalInfo");

  const parsed = FormSchema.safeParse({
    firstName,
    lastName,
    email,
    linkedIn,
    visas,
    resume,
    additionalInfo,
  });


  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.format(),
    };
  }

  return {
    success: true,
    errors: null,
  };
}
