import { sql } from "@vercel/postgres";

export async function GET() {
  try {
    // Create table if not exists
    await sql`
      CREATE TABLE IF NOT EXISTS daftar_hadir (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        message TEXT,
        hadir BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    return Response.json(
      { status: true, message: "Table daftar_hadir created successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { status: false, message: error.message },
      { status: 500 }
    );
  }
}
