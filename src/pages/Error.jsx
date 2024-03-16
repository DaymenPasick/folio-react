//Will import functionality for route pathing error handling
import { useRouteError } from 'react-router-dom';

//this code will handle errors in/with route paths 
//if any should occur
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
