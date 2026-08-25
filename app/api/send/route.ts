import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      return NextResponse.json({ error: 'Key fehlt' }, { status: 500 })
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: ['lentini.campus.nobel@gmail.com'],
        subject: `Kontaktanfrage: ${body.topic || 'Allgemein'}`,
        reply_to: body.email || undefined,
        text: `Name: ${body.name || '-'}\nE-Mail: ${body.email || '-'}\nNachricht:\n${body.message || '-'}`,
      }),
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'Resend Fehler' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Fehler' }, { status: 500 })
  }
}