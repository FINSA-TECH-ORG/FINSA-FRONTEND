import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // 1. Intercept incoming authorization headers
    const authHeader = request.headers.get('authorization');

    // 2. Gatekeeper validation block
    if (!authHeader || authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return new NextResponse(
        JSON.stringify({ error: "Access Denied: Secure Verification Failed" }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 3. Return a clean, microscopic 18-byte JSON footprint response payload
    return NextResponse.json(
      { status: "awake", timestamp: Date.now() },
      { status: 200 }
    );
  } catch (error) {
    console.error("Internal cron-alive execution error:", error);
    return NextResponse.json({ error: "Execution Fail" }, { status: 500 });
  }
}