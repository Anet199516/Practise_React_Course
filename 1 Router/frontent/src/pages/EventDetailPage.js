import {json, redirect, useRouteLoaderData} from 'react-router-dom';
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

function EventDetailPage() {
    const data = useRouteLoaderData('event-detail');

    return (
        <>
            <EventItem event={data.event} />
        </>
    )
}

export default EventDetailPage;

export async function loader({request, params}) {
    const id = params.eventId;

    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
        throw json(
            { message: 'Could not delete event' },
            { status: 500}
        )
    } else {
        return response;
    }
}

export async function loaderEvents() {
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

export async function action({ params, request }) {
    const id = params.eventId;

    const response = await fetch(
        'http://localhost:8080/events/' + id,
        { method: request.method }
    );

    if (!response.ok) {
        throw json(
            { message: 'Could not fetch details for selected event' },
            { status: 500}
        )
    }

    return redirect('/events');
}

async function loadEvent(id) {
    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
        throw json(
            { message: 'Could not delete event' },
            { status: 500}
        )
    } else {
        return response;
    }
}