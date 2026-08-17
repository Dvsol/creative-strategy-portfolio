import { NextResponse } from "next/server";
import { db } from "@/db";
import { inquiries } from "@/db/schema";

const VALID_SERVICES = [
  "Creative Strategy",
  "YouTube Strategy",
  "Strategy Audit",
  "Research & Strategic Breakdowns",
  "Not sure yet",
];

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { name, email, service, message } = (body ?? {}) as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json({ error: "Please provide your name." }, { status: 400 });
  }
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return NextResponse.json({ error: "Please provide a valid email." }, { status: 400 });
  }
  if (typeof service !== "string" || !VALID_SERVICES.includes(service)) {
    return NextResponse.json({ error: "Please choose a service." }, { status: 400 });
  }
  if (typeof message !== "string" || message.trim().length < 10) {
    return NextResponse.json(
      { error: "Tell me a bit more — at least a sentence or two." },
      { status: 400 }
    );
  }

  await db.insert(inquiries).values({
    name: name.trim().slice(0, 200),
    email: email.trim().slice(0, 200),
    service,
    message: message.trim().slice(0, 5000),
  });

  return NextResponse.json({ ok: true }, { status: 201 });
}
