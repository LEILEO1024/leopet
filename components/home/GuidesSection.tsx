import SectionTitle from "../shared/SectionTitle";
import ServiceCard from "../shared/ServiceCard";
import { guides } from "@/data/guides";

export default function GuidesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="宠物指南"
          href="/zh/chongwu-zhinan"
          linkText="查看所有指南"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {guides.map((guide) => (
            <ServiceCard key={guide.id} item={guide} categoryLabel={guide.category} />
          ))}
        </div>
      </div>
    </section>
  );
}
