import { cookies } from "next/headers";
import LeadsTable from "./components/table";

export default async function LeadsPage() {
  const cookieStore = await cookies();
  const leads = JSON.parse(cookieStore.get("leads")?.value ?? "[]");

  return <LeadsTable leads={leads} />;
}
