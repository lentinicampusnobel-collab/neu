import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, phone } = body;

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Standard-Absender im Testmodus
      to: ['lentini.campus.nobel@gmail.com'], // HIER DEINE RESEND-ANMELDE-EMAIL EINTRAGEN
      subject: `Neue Kontaktanfrage von ${name}`,
      replyTo: email,
      text: `Name: ${name}\nE-Mail: ${email}\nTelefon: ${phone || 'Nicht angegeben'}\n\nNachricht:\n${message}`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}