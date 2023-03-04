import { NextResponse } from 'next/server'

export interface AddUrlResponse {
  ID: number
  CreatedAt: Date
  UpdatedAt: Date
  DeletedAt: Date | null
  url: string
  shortened_url: string
}

export async function POST(request: Request) {
  console.log(process.env.API_URL)
  const { link } = await request.json()
  const res = await fetch(`${process.env.API_URL}/add-url`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ link }),
  })
  const result: AddUrlResponse = await res.json()

  return NextResponse.json(result)
}
