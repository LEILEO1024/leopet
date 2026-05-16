import Link from "next/link";
import { Phone, Mail, MapPin, Heart } from "lucide-react";

const quickLinks = [
  { label: "宠物信息", href: "/zh/chongwu-xinxi" },
  { label: "领养者", href: "/zh/lingyang-zhe" },
  { label: "宠物服务", href: "/zh/chongwu-fuwu" },
  { label: "宠物活动", href: "/zh/chongwu-huodong" },
  { label: "宠物指南", href: "/zh/chongwu-zhinan" },
  { label: "博客", href: "/zh/blogs" },
  { label: "宠物产品", href: "/zh/chongwu-chanpin" },
  { label: "品种指南", href: "/zh/pinzhong-zhinan" },
  { label: "宠物百科", href: "/zh/chongwu-baike" },
];

const pages = [
  { label: "关于我们", href: "/zh/about" },
  { label: "隐私政策", href: "/zh/privacy" },
  { label: "服务条款", href: "/zh/terms" },
  { label: "联系我们", href: "/zh/contact" },
  { label: "常见问题", href: "/zh/faq" },
  { label: "免费发布", href: "/zh/mianfei-fabu" },
  { label: "什么宠物适合我？", href: "/zh/pet-quiz" },
  { label: "企业注册", href: "/zh/corporate" },
];

const languages = [
  { label: "English", flag: "🇬🇧" },
  { label: "Türkçe", flag: "🇹🇷" },
  { label: "Español", flag: "🇪🇸" },
  { label: "中文", flag: "🇨🇳" },
  { label: "Français", flag: "🇫🇷" },
  { label: "Русский", flag: "🇷🇺" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">关于 LeoPet</h4>
            <p className="text-sm leading-relaxed text-gray-400">
              LeoPet 是全球最全面的宠物平台，涵盖领养、销售、走失与寻回、
              兽医服务、宠物店产品、培训中心等，覆盖所有宠物品种的一站式服务。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white font-semibold mb-4">页面</h4>
            <ul className="space-y-2">
              {pages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">联系我们</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="h-4 w-4 flex-shrink-0" />
                +90 (212) 555-0123
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="h-4 w-4 flex-shrink-0" />
                team@leopet.com
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>
                  Maslak Mahallesi, Büyükdere Cad. No:123
                  <br />
                  Şişli / İstanbul
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {["Facebook", "Instagram", "TikTok"].map((social) => (
            <span
              key={social}
              className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-sm text-gray-400 hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
            >
              {social[0]}
            </span>
          ))}
        </div>

        {/* Language Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {languages.map((lang) => (
            <button
              key={lang.label}
              className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${
                lang.label === "中文"
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              {lang.flag} {lang.label}
            </button>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2025-2026 leopet.com. 保留所有权利。
          </p>
          <p className="text-xs text-gray-600 mt-1 flex items-center justify-center gap-1">
            用爱制作 <Heart className="h-3 w-3 text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
