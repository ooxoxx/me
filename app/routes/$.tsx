import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ColoredEm from "~/components/colored-em";

export function loader({ params }: LoaderFunctionArgs) {
  return params["*"];
}

export default function () {
  const unknownUrl = useLoaderData<typeof loader>();
  return (
    <div>
      Sorry, <ColoredEm>/{unknownUrl}</ColoredEm> is under construction ...
    </div>
  );
}
