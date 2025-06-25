import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email invalide." }, { status: 400 });
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const DATACENTER = API_KEY?.split("-")[1];

    if (!API_KEY || !AUDIENCE_ID || !DATACENTER) {
      console.error("Mailchimp config manquante", { API_KEY, AUDIENCE_ID, DATACENTER });
      return NextResponse.json({ error: "Configuration Mailchimp manquante." }, { status: 500 });
    }

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    const data = {
      email_address: email,
      status: "subscribed",
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `apikey ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 400) {
      const resData = await response.json();
      // Déjà inscrit
      if (resData.title === "Member Exists") {
        return NextResponse.json({ error: "Cet email est déjà inscrit." }, { status: 400 });
      }
      console.error("Mailchimp 400", resData);
      return NextResponse.json({ error: resData.detail || "Erreur Mailchimp." }, { status: 400 });
    }

    if (!response.ok) {
      const resData = await response.text();
      console.error("Mailchimp error", resData);
      return NextResponse.json({ error: "Erreur lors de l'inscription à la newsletter." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API /api/newsletter error:", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
