import Link from "next/link";

export default function FreePostingCTA() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">免费发布宠物信息</h2>
        <p className="text-gray-500 mb-6">
          前10条免费。几分钟内发布宠物、领养或走失信息。
        </p>
        <Link
          href="/zh/mianfei-fabu"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
        >
          立即尝试
        </Link>
      </div>
    </section>
  );
}
