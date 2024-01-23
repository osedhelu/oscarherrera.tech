import type { APIRoute } from "astro";

export const GET: APIRoute = ({ params, request }) => {
  // console.log("TCL: GET:APIRoute -> request", request.body);
  return new Response(
    JSON.stringify({
      path: new URL(request.url).pathname,
    })
  );
};
