import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export function loader({ params }: LoaderFunctionArgs) {
  return params["*"];
}

export default function () {
  const unknownUrl = useLoaderData<typeof loader>();
  return (
    <div>
      Whats That? Sorry,
      <span className="relative mx-2">
        <span
          className="block absolute -inset-1 bg-primary/50 rounded-md"
          aria-hidden="true"
        ></span>
        <span className="relative text-primary-foreground">/{unknownUrl}</span>
      </span>
      Is Under Construction ...
    </div>
  );
}
