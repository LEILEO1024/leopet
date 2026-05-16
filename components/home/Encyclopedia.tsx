import Link from "next/link";
import { encyclopediaItems } from "@/data/encyclopedia";

export default function Encyclopedia() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">宠物百科</h2>
        <p className="text-gray-500 text-center mb-10">探索各品种宠物的详细资料</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {encyclopediaItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all text-center"
            >
              <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
