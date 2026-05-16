import { Service, Venue, Guide } from "@/types";
import { Eye } from "lucide-react";
import StarRating from "./StarRating";

interface ServiceCardProps {
  item: Service | Venue | Guide;
  categoryLabel?: string;
}

export default function ServiceCard({ item, categoryLabel }: ServiceCardProps) {
  const name = "title" in item ? (item as Guide).title : (item as Service | Venue).name;
  const location =
    "location" in item ? (item as Venue | Service & { location?: string }).location : undefined;

  return (
    <div className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          {categoryLabel && (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
              {categoryLabel}
            </span>
          )}
        </div>
        <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">{name}</h3>
        {location && (
          <p className="text-xs text-gray-500 mb-1">{location}</p>
        )}
        <p className="text-xs text-gray-500 line-clamp-2 mb-3">
          {"description" in item ? item.description : ""}
        </p>
        <div className="flex items-center justify-between">
          <StarRating rating={item.rating} />
          <span className="inline-flex items-center gap-1 text-xs text-gray-400">
            <Eye className="h-3 w-3" />
            {item.views.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
