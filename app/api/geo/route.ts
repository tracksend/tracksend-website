import { getLocationFromIP } from '@/lib/geolocation'

export async function GET() {
  const location = await getLocationFromIP()
  return Response.json(location)
}
