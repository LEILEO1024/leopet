import Link from "next/link";
import { Heart, Camera, Users } from "lucide-react";

export default function LeoPetBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full mb-3 inline-block">
              LeoPet
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              宠物才是明星的社交媒体
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              在 LeoPet 分享毛孩子的照片，与其他宠物主人交流互动，
              建立宠物专属的社交圈子。每个点赞都是对毛孩子的爱！
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
              {[
                { icon: Camera, text: "分享照片" },
                { icon: Heart, text: "收获爱心" },
                { icon: Users, text: "结识宠友" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-gray-600">
                  <item.icon className="h-4 w-4 text-purple-500" />
                  {item.text}
                </div>
              ))}
            </div>
            <Link
              href="/zh/leopet-social"
              className="inline-block px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors font-medium text-sm"
            >
              探索 LeoPet →
            </Link>
          </div>
          <div className="flex-1">
            <img
              src="https://loremflickr.com/600/400/pets,dog-cat?random=81"
              alt="LeoPet 预览"
              className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
