import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">LeoPet</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          全球值得信赖的宠物平台，将收养、销售与领养结合。
          寻找或发布免费领养信息，探索兽医、美容、训练等专业宠物服务。
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/zh/mianfei-fabu"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium text-sm"
          >
            免费发布宠物信息
          </Link>
          <Link
            href="/zh/chongwu-xinxi/lingyang"
            className="px-6 py-3 bg-white text-blue-600 rounded-xl border border-blue-200 hover:border-blue-400 transition-colors font-medium text-sm"
          >
            浏览待领养宠物
          </Link>
          <Link
            href="/zh/find-lost-pet"
            className="px-6 py-3 bg-white text-blue-600 rounded-xl border border-blue-200 hover:border-blue-400 transition-colors font-medium text-sm"
          >
            AI 寻宠助手
          </Link>
        </div>
      </div>
    </section>
  );
}
