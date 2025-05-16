import RegisterForm from "./components/form";

export default function LeadRegisterPage() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="w-full bg-[#e1e8b6] justify-items-center content-center mb-10 lg:mb-0 relative p-5 min-h-80">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black leading-tight max-w-lg">
          Get An Assessment <br />
          Of Your Immigration Case
        </h1>
      </div>
      <div className="max-w-96 space-y-4 p-6">
        <RegisterForm />
      </div>
    </div>
  );
}
