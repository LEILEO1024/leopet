import SectionTitle from "../shared/SectionTitle";
import ServiceCard from "../shared/ServiceCard";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="宠物服务"
          href="/zh/chongwu-fuwu"
          linkText="查看所有服务"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServiceCard key={service.id} item={service} categoryLabel={service.category} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            寻找你身边的兽医、美容、训练等专业宠物服务提供商。
          </p>
        </div>
      </div>
    </section>
  );
}
