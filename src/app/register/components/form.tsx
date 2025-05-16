"use client";
import CheckboxGroup from "@/ui/CheckboxGroup";
import TextField from "@/ui/TextField";
import { handleSubmit } from "../actions/submit";
import { useActionState } from "react";
import { VisaEnum } from "@/types/Visa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ApprovedVisaImage from "@/assets/approved_visa.png";
import WorldWideImage from "@/assets/world_wide.png";
import HelpImage from "@/assets/help.png";

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
      <div role="status" tabIndex={-1} className="p-4 max-w-lg mx-auto text-center space-y-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You</h3>
        <p className="text-sm font-bold text-gray-600 max-w-lg mx-auto">
          Your information was submitted to our team of immigration attorneys.
          Expect an email from hello@tryalma.ai.
        </p>
        <button
          type="button"
          onClick={() => router.push("/login")}
          className="w-full bg-black text-white font-small py-2 px-4 rounded-xl transition"
        >
          Go Back to HomePage
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="text-center justify-items-center">
        <Image
          src={ApprovedVisaImage}
          height={40}
          alt="Approved visa illustration"
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Want to understand your visa options?
        </h3>
        <p className="text-sm text-gray-600 max-w-md mx-auto">
          Submit the form below and our team of experienced attorneys will
          review your information and send a preliminary assessment of your case
          based on your goals
        </p>
      </div>

      <form
        action={formAction}
        aria-label="Alma Application Form"
        className="space-y-6 max-w-xl mx-auto mt-10"
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

        <div>
          <div className="justify-items-center">
            <Image src={WorldWideImage} height={40} alt="World illustration" />
          </div>
          <h3 className="text-center text-xl font-semibold text-gray-800 mb-2">
            Visa categories of interest?
          </h3>
          <CheckboxGroup
            options={VISAS_OPTIONS}
            name="visas"
            error={state.errors?.visas}
          />
        </div>

        <div>
          <label
            htmlFor="resume"
            className=" text-center block text-sm font-medium text-gray-700 mb-1"
          >
            Resume/CV Upload
          </label>
          <input
            id="resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-medium file:bg-lime-100 file:text-lime-700 hover:file:bg-lime-200"
          />
        </div>

        <div>
          <div className="justify-items-center">
            <Image src={HelpImage} height={40} alt="Help illustration" />
          </div>
          <h3 className="text-center text-xl font-semibold text-gray-800 mb-2">
            How can we help you?
          </h3>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            rows={5}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-300 focus:border-transparent resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-lime-400 hover:bg-lime-500 text-white font-medium py-2 px-4 rounded-xl transition"
        >
          Submit
        </button>
      </form>
    </>
  );
}
