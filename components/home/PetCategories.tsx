import Link from "next/link";

const petCategories = [
  {
    title: "狗",
    count: 945,
    description:
      "寻找附近的免费幼犬领养信息，查看各品种狗狗性格、体型和护理需求。",
    href: "/zh/chongwu-xinxi/lingyang/dog",
    color: "bg-red-50 text-red-600",
  },
  {
    title: "猫",
    count: 546,
    description:
      "查看已接种疫苗、健康状况透明的猫咪领养信息，了解每只猫的生活方式。",
    href: "/zh/chongwu-xinxi/lingyang/cat",
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "鹦鹉",
    count: 170,
    description:
      "会说话的宠物鹦鹉，了解其社交需求、智商水平和语言能力。",
    href: "/zh/chongwu-xinxi/lingyang/parrot",
    color: "bg-green-50 text-green-600",
  },
  {
    title: "仓鼠",
    count: 39,
    description:
      "了解仓鼠品种、性情、所需笼具大小和噪音水平，适合小空间饲养。",
    href: "/zh/chongwu-xinxi/lingyang/hamster",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    title: "兔子",
    count: 28,
    description:
      "宠物兔品种介绍，了解其性情特点、家庭适应性和饲养注意事项。",
    href: "/zh/chongwu-xinxi/lingyang/rabbit",
    color: "bg-pink-50 text-pink-600",
  },
  {
    title: "鱼",
    count: 21,
    description:
      "观赏鱼品种详解，包括鱼缸大小、水质条件、不同鱼种的兼容性。",
    href: "/zh/chongwu-xinxi/lingyang/fish",
    color: "bg-blue-50 text-blue-600",
  },
];

export default function PetCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">宠物类别</h2>
        <p className="text-gray-500 text-center mb-10">按物种探索所有待领养宠物</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {petCategories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${cat.color}`}>
                  {cat.title === "狗" ? "🐕" : cat.title === "猫" ? "🐈" : cat.title === "鹦鹉" ? "🦜" : cat.title === "仓鼠" ? "🐹" : cat.title === "兔子" ? "🐰" : "🐟"}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{cat.title}</h3>
                  <span className="text-sm text-blue-600 font-medium">+{cat.count}</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 line-clamp-2">{cat.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
