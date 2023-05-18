export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const message = `Email *${id}* has been read by \n${request.headers.get(
    'user-agent'
  )},\nIP:${request.headers.get('x-real-ip')}`;

  // send telegram message
  const sendTo = 701469970; // your telegram id
  const token = process.env.TELEGRAM_TOKEN;

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: sendTo,
      text: message,
      parse_mode: 'Markdown',
    }),
  });

  //return image
  const image_url =
    'https://www.whitworth.edu/cms/media/whitworth/documents/administration/marketing-amp-communications/whitworth-logos/whitworth-logo-horizontal-rgb.png';

  const response = await fetch(image_url);
  return new Response(response.body, {
    headers: { 'Content-Type': 'image/png' },
  });
}
