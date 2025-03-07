import { useLoaderData } from 'react-router-dom';

import EventItem from '../components/EventItem';

function EventDetailPage() {
  const data = useLoaderData();

  return (
    <EventItem event={data.event} />
  );
}

export default EventDetailPage;

export async function loader({request, params}) {
  const id = params.eventId;

  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not fetch event details.' }), {
      status: 500,
    });
  } else {
    return response;
  }
}