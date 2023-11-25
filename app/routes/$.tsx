import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export function loader({ params }: LoaderFunctionArgs) {
  return params["*"];
}

export default function () {
  const unknownUrl = useLoaderData<typeof loader>();
  return (
    <div>
      Sorry,
      <span className="relative mx-2">
        <span
          className="block absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md"
          aria-hidden="true"
        ></span>
        <span className="relative text-primary-foreground">/{unknownUrl}</span>
      </span>
      is under construction ...
    </div>
  );
}
