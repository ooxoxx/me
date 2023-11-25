/// <reference types="@remix-run/node" />
/// <reference types="vite/client" />

export type Frontmatter = {
  meta: {
    title: string;
    description: string;
  };
};
declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element;
  export const frontmatter: Frontmatter;
  export default MDXComponent;
}
