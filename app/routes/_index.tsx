import type { MetaFunction } from "@remix-run/node";
import ColoredEm from "~/components/colored-em";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1 className="">
        Hi, there! I'm <ColoredEm>Leo lhr</ColoredEm>. This is my personal
        website.
      </h1>
    </div>
  );
}
