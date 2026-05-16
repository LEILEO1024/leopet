import Link from "next/link";

interface SectionTitleProps {
  title: string;
  href?: string;
  linkText?: string;
}

export default function SectionTitle({ title, href, linkText }: SectionTitleProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      {href && (
        <Link
          href={href}
          className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
        >
          {linkText || "查看全部"} →
        </Link>
      )}
    </div>
  );
}
