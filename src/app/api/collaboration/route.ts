import { NextResponse } from "next/server";

const requiredFields = [
  "Nombre",
  "Email o forma de contacto",
  "Tipo de colaboración",
  "Explicación de la idea",
];
const honeypotField = "Empresa";
const web3FormsEndpoint = "https://api.web3forms.com/submit";

function getFormValue(formData: FormData, field: string) {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
}

function validateRequiredFields(formData: FormData) {
  return requiredFields.filter((field) => !getFormValue(formData, field));
}

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return NextResponse.json(
      { success: false, message: "WEB3FORMS_ACCESS_KEY no está configurada." },
      { status: 500 },
    );
  }

  try {
    const formData = await request.formData();

    if (getFormValue(formData, honeypotField)) {
      return NextResponse.json({ success: true });
    }

    const missingFields = validateRequiredFields(formData);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { success: false, message: "Faltan campos obligatorios.", missingFields },
        { status: 400 },
      );
    }

    formData.delete(honeypotField);
    // La clave de Web3Forms se añade solo en servidor para no exponerla en React, HTML ni site-data.
    formData.set("access_key", accessKey);
    formData.set("subject", "Nueva propuesta de colaboración desde JellySolutions");
    formData.set("from_name", "JellySolutions - Colabora");

    const response = await fetch(web3FormsEndpoint, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    const result = await response.json().catch(() => null);

    if (!response.ok || !result?.success) {
      return NextResponse.json(
        { success: false, message: result?.message ?? "No se pudo enviar el formulario." },
        { status: response.ok ? 502 : response.status },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, message: "No se pudo conectar con Web3Forms." },
      { status: 502 },
    );
  }
}
