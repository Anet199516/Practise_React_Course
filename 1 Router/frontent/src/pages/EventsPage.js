import {json, useLoaderData} from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
    const events = useLoaderData();

    return (
        <>
            <EventsList events={events.events} />
        </>
    );
}

export default EventsPage;

async function loadEvents() {}

export async function loader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // example 1
        // throw new Response(JSON.stringify({
        //     message: 'Could not fetch events',
        //     status: 500,
        // }));

        // example 2
        return json({
            message: 'Could not fetch events',
            status: 500,
        });

    } else {
        return response;
    }
}