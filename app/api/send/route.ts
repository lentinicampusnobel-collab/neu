import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message, topic } = body

    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      return NextResponse.json({ error: 'API Key fehlt auf dem Server.' }, { status: 500 })
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: ['lentini.campus.nobel@gmail.com'],
        subject: `Neue Kontaktanfrage: ${topic || 'Allgemein'}`,
        reply_to: email,
        text: `Name: ${name}\nE-Mail: ${email}\nAnliegen: ${topic || '-'}\n\nNachricht:\n${message}`,
      }),
    })

    if (!response.ok) {
      return NextResponse.json({ error: 'Resend API Fehler' }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Serverfehler' }, { status: 500 })
  }
}