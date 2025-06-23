import { NextRequest, NextResponse } from 'next/server';

const API_KEY = '5e2d9e363d6244e773dd2a3be9803126';
const SECRET_KEY = '119926b8708a82f623bc090432f71960';
const EMAIL_API_URL = 'https://api.mailjet.com/v3.1/send';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: 'Email manquant' }, { status: 400 });
    }

    const response = await fetch(EMAIL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from(`${API_KEY}:${SECRET_KEY}`).toString('base64'),
      },
      body: JSON.stringify({
        Messages: [
          {
            From: {
              Email: "tonadresse@email.com",
              Name: "Nom de l’expéditeur"
            },
            To: [
              {
                Email: email,
                Name: "Destinataire"
              }
            ],
            Subject: "Confirmation d’inscription à la newsletter",
            TextPart: "Merci pour votre inscription à notre newsletter !",
            HTMLPart: "<p>Merci pour votre inscription à notre <strong>newsletter</strong> !</p>"
          }
        ]
      }),
    });
 
    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json({ error }, { status: response.status });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}   
