import SectionTitle from "../shared/SectionTitle";
import PetCard from "../shared/PetCard";
import { pets } from "@/data/pets";

export default function AdoptionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="免费领养"
          href="/zh/chongwu-xinxi/lingyang"
          linkText="查看所有待领养宠物"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    </section>
  );
}
