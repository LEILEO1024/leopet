import SectionTitle from "../shared/SectionTitle";
import ServiceCard from "../shared/ServiceCard";
import { venues } from "@/data/venues";

export default function VenuesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="宠物友好场所"
          href="/zh/chongwu-youhao-changsuo"
          linkText="查看所有场所"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {venues.map((venue) => (
            <ServiceCard key={venue.id} item={venue} categoryLabel={venue.category} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            分享你去过的宠物友好场所体验，帮助更多宠物家庭发现好去处。
          </p>
        </div>
      </div>
    </section>
  );
}
