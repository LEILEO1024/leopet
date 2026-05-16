import { BlogPost } from "@/types";
import { Eye, Calendar } from "lucide-react";

interface BlogCardProps {
  blog: BlogPost;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {blog.title}
        </h3>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {blog.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <Eye className="h-3 w-3" />
            {blog.views}
          </span>
        </div>
      </div>
    </div>
  );
}
