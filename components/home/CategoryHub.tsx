import Link from "next/link";
import {
  Search,
  Users,
  Stethoscope,
  MapPin,
  Heart,
  Trophy,
  ShoppingBag,
  BookOpen,
  Shield,
} from "lucide-react";
import { categories } from "@/data/categories";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Users,
  Stethoscope,
  MapPin,
  Heart,
  Trophy,
  ShoppingBag,
  BookOpen,
  Shield,
};

export default function CategoryHub() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">宠物的一切都在这里</h2>
          <p className="text-gray-500">在一个平台满足所有宠物需求</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => {
            const IconComp = iconMap[cat.icon] || Search;
            return (
              <Link
                key={cat.href}
                href={cat.href}
                className="group bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    <IconComp className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-semibold text-gray-900">{cat.title}</h3>
                      {cat.count > 0 && (
                        <span className="text-xs font-medium text-blue-600">+{cat.count.toLocaleString()}</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 line-clamp-2">{cat.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
