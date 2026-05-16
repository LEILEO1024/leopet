"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, User, Heart, Globe } from "lucide-react";
import { NavLink } from "@/types";

const navLinks: NavLink[] = [
  { label: "宠物信息", href: "/zh/chongwu-xinxi" },
  { label: "领养者", href: "/zh/lingyang-zhe" },
  { label: "宠物服务", href: "/zh/chongwu-fuwu" },
  { label: "宠物友好场所", href: "/zh/chongwu-youhao-changsuo" },
  { label: "宠物社交", href: "/zh/petsocial" },
  { label: "宠物活动", href: "/zh/chongwu-huodong" },
  { label: "宠物指南", href: "/zh/chongwu-zhinan" },
  { label: "宠物产品", href: "/zh/chongwu-chanpin" },
  { label: "宠物保险", href: "/zh/chongwu-baoxian" },
];

export default function MainNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/zh" className="text-xl font-bold text-blue-600 flex-shrink-0">
            LeoPet
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-2.5 py-1.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link
              href="/zh/login"
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              登录
            </Link>
            <Link
              href="/zh/register"
              className="text-sm px-4 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              注册
            </Link>
            <button className="p-1.5 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
              <Globe className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 flex items-center gap-3">
              <Link
                href="/zh/login"
                className="flex-1 text-center text-sm py-2 text-gray-600 hover:text-blue-600 border border-gray-200 rounded-lg transition-colors"
              >
                登录
              </Link>
              <Link
                href="/zh/register"
                className="flex-1 text-center text-sm py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                注册
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
