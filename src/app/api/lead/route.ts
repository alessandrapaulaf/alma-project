import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  const { leadId } = await request.json();

  if (!leadId) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const cookieStore = await cookies();

  const leads = JSON.parse(cookieStore.get("leads")?.value ?? "[]");
  const leadIndex = leads.findIndex((lead: { id: string }) => lead.id === leadId);

  if (leadIndex !== -1) {
    leads[leadIndex] = { ...leads[leadIndex], status: "Reached Out" };
    cookieStore.set("leads", JSON.stringify(leads));
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
