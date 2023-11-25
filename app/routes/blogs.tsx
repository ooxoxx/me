import { MDXProvider } from "@mdx-js/react";
import { Outlet } from "@remix-run/react";
import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1(props) {
    return <h1 className="font-black text-2xl" {...props} />;
  },
  h2(props) {
    return <h1 className="font-bold text-lg" {...props} />;
  },
  em(props) {
    return <i className="underline" {...props} />;
  },
  strong(props) {
    return <span className="font-black" {...props} />;
  },
  li(props) {
    return <li className="before:content-['-'] before:mr-1" {...props} />;
  },
};

export default function () {
  return (
    <div>
      <MDXProvider components={components}>
        <Outlet />
      </MDXProvider>
    </div>
  );
}
