import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, topic } = body;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: ['lentini.campus.nobel@gmail.com'],
        subject: `Neue Kontaktanfrage: ${topic || 'Allgemein'}`,
        reply_to: email,
        text: `Name: ${name}\nE-Mail: ${email}\nAnliegen: ${topic || '-'}\n\nNachricht:\n${message}`,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'E-Mail konnte nicht gesendet werden.' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Ungültige Anfrage.' }, { status: 400 });
  }
}