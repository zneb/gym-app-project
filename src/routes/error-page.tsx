import { useRouteError } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export function ErrorPage() {
  const error: any = useRouteError();

  return (
    <>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Navbar />
    </>
  );
}
