import { Pet } from "@/types";
import { Eye } from "lucide-react";

interface PetCardProps {
  pet: Pet;
}

export default function PetCard({ pet }: PetCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
      <div className="aspect-square overflow-hidden">
        <img
          src={pet.image}
          alt={pet.breed}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          {pet.badge && (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700">
              {pet.badge}
            </span>
          )}
          {pet.price && (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
              {pet.price}
            </span>
          )}
          {pet.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-sm text-gray-700 mb-2 line-clamp-2">{pet.description}</h3>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-500 mb-2">
          <span>{pet.age}</span>
          <span>·</span>
          <span>{pet.gender}</span>
          {pet.trained !== undefined && (
            <>
              <span>·</span>
              <span>{pet.trained ? "受过训练" : "未受教育"}</span>
            </>
          )}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-900">{pet.breed}</span>
          <span className="inline-flex items-center gap-1 text-xs text-gray-400">
            <Eye className="h-3 w-3" />
            {pet.views.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
