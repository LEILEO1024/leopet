import Link from "next/link";
import SectionTitle from "../shared/SectionTitle";
import BlogCard from "../shared/BlogCard";
import { blogs } from "@/data/blogs";

export default function BlogSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="博客文章"
          href="/zh/blogs"
          linkText="阅读更多"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
