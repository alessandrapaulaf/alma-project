import CheckboxGroup from "@/ui/CheckboxGroup";
import TextField from "@/ui/TextField";
import React from "react";

const VISAS = [
  { value: "O1", label: "O-1" },
  { value: "EB-1A", label: "EB-1A" },
  { value: "EB-2", label: "EB-2 NIW" },
  { value: "IDK", label: "I don't know" },
];

export default function RegisterForm() {
  async function handleSubmit(formData: FormData) {
    "use server";

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const linkedIn = formData.get("linkedIn");
    const visas = formData.getAll("visas");
    const resume = formData.get("resume");
    const additionalInfo = formData.get("additionalInfo");

    console.log({
      firstName,
      lastName,
      email,
      linkedIn,
      visas,
      resume,
      additionalInfo,
    });
  }

  return (
    <form
      action={handleSubmit}
      aria-label="Job Application Form"
      className="space-y-6 max-w-xl mt-8"
    >
      <TextField
        label="First Name"
        name="firstName"
        type="text"
        required
        placeholder="First Name"
      />

      <TextField
        label="Last Name"
        name="lastName"
        type="text"
        required
        placeholder="Last Name"
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        required
        placeholder="Email"
      />

      <TextField
        label="LinkedIn / Personal Website URL"
        name="linkedIn"
        type="url"
        placeholder="LinkedIn / Personal Website URL"
      />

      <CheckboxGroup options={VISAS} name="visas" id="visas" />

      <div>
        <label htmlFor="resume">Resume/CV Upload</label>
        <input
          id="resume"
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          required
          className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      <textarea
        id="additionalInfo"
        name="additionalInfo"
        rows={5}
        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
      >
        Submit
      </button>
    </form>
  );
}
