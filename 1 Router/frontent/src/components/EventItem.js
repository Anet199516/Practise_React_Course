import classes from './EventItem.module.css';
import {Link, useSubmit} from "react-router-dom";

function EventItem({ event }) {
    const token = useRouteLoaderData('root');

  function StartDeleteHandler() {
    const proceed = window.confirm("Are you sure you want to delete it?");
    const submit = useSubmit();

    if (proceed) {
        submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
        {token && (<menu className={classes.actions}>
            <Link to="edit">Edit</Link>
            <button onClick={StartDeleteHandler}>Delete</button>
        </menu>)}
    </article>
  );
}

export default EventItem;
