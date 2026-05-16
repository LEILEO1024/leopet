import Link from "next/link";
import SectionTitle from "../shared/SectionTitle";
import AdopterCard from "../shared/AdopterCard";
import { adopters } from "@/data/adopters";

export default function AdopterSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="寻找宠物的人"
          href="/zh/lingyang-zhe"
          linkText="查看所有领养者"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {adopters.map((adopter) => (
            <AdopterCard key={adopter.id} adopter={adopter} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm mb-3">
            寻找宠物新家？发布免费领养意向广告，让合适的领养人找到你。
          </p>
          <Link
            href="/zh/mianfei-fabu"
            className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            免费发布领养意向 →
          </Link>
        </div>
      </div>
    </section>
  );
}
