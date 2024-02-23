import type { MetaFunction } from "@remix-run/cloudflare";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { blogs } from "~/blogs";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return { blogs };
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <a href={`/blog/${encodeURIComponent(blog.title)}`}>{blog.title}</a>
        </div>
      ))}
    </div>
  );
}
