import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const product = {
    id,
    name: 'Product ' + id,
  };
  const image_url =
    'https://www.whitworth.edu/cms/media/whitworth/documents/administration/marketing-amp-communications/whitworth-logos/whitworth-logo-horizontal-rgb.png';

  //return image

  const response = await fetch(image_url);
  return new Response(response.body, {
    headers: { 'Content-Type': 'image/png' },
  });
}
