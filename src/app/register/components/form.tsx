"use client";
import CheckboxGroup from "@/ui/CheckboxGroup";
import TextField from "@/ui/TextField";
import { handleSubmit } from "../actions/submit";
import { useActionState } from "react";
import { VisaEnum } from "@/types/Visa";
import { useRouter } from "next/navigation";

const VISAS_OPTIONS = [
  { value: VisaEnum.O1, label: "O-1" },
  { value: VisaEnum.EB1A, label: "EB-1A" },
  { value: VisaEnum.EB2, label: "EB-2 NIW" },
  { value: VisaEnum.UNKNOWN, label: "I don't know" },
];

export default function RegisterForm() {
  const router = useRouter();
  const [state, formAction] = useActionState(handleSubmit, {
    errors: null,
    success: null,
  });

  if (state.success) {
    return (
      <div
        role="status"
        tabIndex={-1}
        className="p-4 rounded bg-green-100 border border-green-300 text-green-800 max-w-md mx-auto"
      >
        <h2 className="text-lg font-semibold mb-2">Thank You</h2>
        <p>
          Your information was submitted to our team of immigration attorneys.
          Expect an email from hello@tryalma.ai.
        </p>
        <button onClick={() => router.push('/login')}>Go Back to HomePage</button>
      </div>
    );
  }

  return (
    <>
      <h1>Want to understand your visa options?</h1>
      <p>
        Submit the form below and our team of experienced attorneys will review
        your information and send a preliminary assessment of your case based on
        your goals
      </p>
      <form
        action={formAction}
        aria-label="Alma Application Form"
        className="space-y-6 max-w-xl mt-8"
      >
        <TextField
          label="First Name"
          name="firstName"
          type="text"
          placeholder="First Name"
          error={state.errors?.firstName}
        />

        <TextField
          label="Last Name"
          name="lastName"
          type="text"
          placeholder="Last Name"
          error={state.errors?.lastName}
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          placeholder="Email"
          error={state.errors?.email}
        />

        <TextField
          label="LinkedIn / Personal Website URL"
          name="linkedIn"
          type="url"
          placeholder="LinkedIn / Personal Website URL"
          error={state.errors?.linkedIn}
        />

        <CheckboxGroup
          options={VISAS_OPTIONS}
          name="visas"
          error={state.errors?.visas}
        />

        <div>
          <label htmlFor="resume">Resume/CV Upload</label>
          <input
            id="resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        <textarea
          id="additionalInfo"
          name="additionalInfo"
          rows={5}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
        >
          Submit
        </button>
      </form>
    </>
  );
}
