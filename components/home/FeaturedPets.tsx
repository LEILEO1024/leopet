import Link from "next/link";
import SectionTitle from "../shared/SectionTitle";
import PetCard from "../shared/PetCard";
import { featuredPets } from "@/data/pets";

export default function FeaturedPets() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="精选宠物"
          href="/zh/chongwu-xinxi"
          linkText="查看全部"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {featuredPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
        <div className="mt-8 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
          <p className="text-gray-700 font-medium mb-2">免费快速发布宠物广告</p>
          <p className="text-sm text-gray-500 mb-3">几分钟发布宠物、领养或走失信息</p>
          <Link
            href="/zh/mianfei-fabu"
            className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            立即发布 →
          </Link>
        </div>
      </div>
    </section>
  );
}
