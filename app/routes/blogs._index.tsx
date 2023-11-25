import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Frontmatter } from "env";

export async function loader() {
  const posts: Record<
    string,
    {
      frontmatter: Frontmatter;
    }
  > = import.meta.glob("./blogs.*.mdx", {
    eager: true,
  });

  return json({
    posts: Object.entries(posts).map(([filepath, { frontmatter }]) => ({
      filepath,
      frontmatter,
    })),
  });
}

function extractName(path: string) {
  let re = /\.\/blogs\.(.*)\.mdx/g;
  let arr = re.exec(path);
  if (!arr) throw new Error("invalid post file.");
  return arr[1];
}

export default function () {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <div>
      <ul>
        {posts.map(({ filepath, frontmatter }) => (
          <li key={filepath}>
            <Link className="underline" to={extractName(filepath)}>
              <div>{frontmatter.meta.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
