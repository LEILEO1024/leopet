import { Adopter } from "@/types";
import { Eye } from "lucide-react";

interface AdopterCardProps {
  adopter: Adopter;
}

export default function AdopterCard({ adopter }: AdopterCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
          <img
            src={adopter.image}
            alt={adopter.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-gray-900 mb-1">{adopter.name}</h3>
          <p className="text-xs text-gray-500 line-clamp-2 mb-2">{adopter.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
              {adopter.targetType}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-gray-400">
              <Eye className="h-3 w-3" />
              {adopter.views.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
