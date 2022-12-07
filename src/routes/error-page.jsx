import { Stack } from "@mui/material";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Stack id="error-page" alignItems="center" sx={{ height: '100%', paddingTop: 24 }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Stack>
  );
}

export { ErrorPage };
