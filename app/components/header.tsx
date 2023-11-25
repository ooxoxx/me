import { NavLink } from "@remix-run/react";
import { ModeToggle } from "./mode-toggle";

const navigations: {
  url: string;
  name: string;
}[] = [
  { url: "/", name: "Home" },
  { url: "/blogs", name: "Blogs" },
  { url: "/works", name: "Works" },
];

export default function () {
  return (
    <header className="px-8 sticky top-0 h-16 shadow bg-background/50 backdrop-blur-md backdrop-saturate-150 z-50">
      <div className="flex justify-between items-center h-full">
        <div>I'm the Logo</div>
        <nav className="flex justify-around items-center gap-4">
          {navigations.map(({ url, name }, idx) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline-offset-8 underline" : ""
              }
              key={idx}
              to={url}
            >
              {name}
            </NavLink>
          ))}
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}
