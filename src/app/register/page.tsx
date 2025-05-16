import RegisterForm from "./components/form";

export default function LeadRegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-96">
        <RegisterForm />
      </div>
    </div>
  );
}
