import RegisterForm from "./components/form";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-96">
        <h1>Want to understand your visa options?</h1>
        <p>
          Submit the form below and our team of experienced attorneys will
          review your information and send a preliminary assessment of your case
          based on your goals
        </p>
        <RegisterForm />
      </div>
    </div>
  );
}
