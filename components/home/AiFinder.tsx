import Link from "next/link";
import { Search } from "lucide-react";

export default function AiFinder() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-10 text-center text-white">
          <div className="w-14 h-14 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
            <Search className="h-7 w-7" />
          </div>
          <h2 className="text-2xl font-bold mb-3">AI 智能寻宠</h2>
          <p className="text-blue-100 mb-6 leading-relaxed max-w-lg mx-auto">
            上传你发现的宠物照片，我们的 AI 将自动匹配走失宠物数据库，
            帮助走失的毛孩子尽快回家。
          </p>
          <Link
            href="/zh/find-lost-pet"
            className="inline-block px-6 py-3 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-colors font-medium text-sm"
          >
            开始寻找 →
          </Link>
        </div>
      </div>
    </section>
  );
}
