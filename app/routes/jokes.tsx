import { Outlet } from "@remix-run/react";
import { type LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/jokes.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};
function JokesRoute() {
  return (
    <div>
      <h1>Jokes</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default JokesRoute;
