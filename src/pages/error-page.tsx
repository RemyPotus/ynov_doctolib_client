import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error:any = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
        <p style={{fontStyle: 'italic'}}>{error.statusText || error.message}</p>
    </div>
  );
}