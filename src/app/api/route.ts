import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const product = {
    id,
    name: 'Product ' + id,
  };

  return NextResponse.json({ product });
}
