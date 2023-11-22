import { db } from "@/lib/db";
import { activities, builds } from "@/lib/schema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  console.log("request:", data);

  // console.log("build:", build);
  try {
    const result = await db.insert(builds).values(data);
    console.log("RES:", result);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.log("error:", error);
    return NextResponse.json(error, { status: 401 });
  }
}
