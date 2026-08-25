import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, topic, message } = body;

    if (!name || !email || !topic || !message) {
      return NextResponse.json({ error: 'Alle Formularfelder sind erforderlich.' }, { status: 400 });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + process.env.RESEND_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: ['lentini.campus.nobel@gmail.com'],
        subject: `Neue Kontaktanfrage: ${topic}`,
        reply_to: email,
        text: `Name: ${name}\nE-Mail: ${email}\nAnliegen: ${topic}\n\nNachricht:\n${message}`,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Die E-Mail konnte nicht gesendet werden.' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Ungültige Anfrage.' }, { status: 400 });
  }
}