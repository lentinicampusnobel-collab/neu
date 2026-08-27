import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: 'API Key fehlt' }, { status: 500 });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: ['lentini.campus.nobel@gmail.com', 'info@ex-lux-immo.de'],
        subject: 'Neue Kontaktanfrage',
        text: `Name: ${data.name || ''}\nE-Mail: ${data.email || ''}\nAnliegen: ${data.topic || ''}\nNachricht: ${data.message || ''}`,
      }),
    });

    const resData = await res.json();

    if (!res.ok) {
      return NextResponse.json({ error: resData.message || 'Resend Fehler' }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Server Fehler' }, { status: 500 });
 
  }
}