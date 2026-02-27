import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"
import { useState } from "react"

export default function ATNMain() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#0081c1" }}>
                <Icon name="Flame" size={18} className="text-white" />
              </div>
              <span className="font-bold text-lg text-slate-900">ООО Компания АТН</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-slate-600 hover:text-[#0081c1] transition-colors font-medium">О компании</a>
              <a href="#services" className="text-slate-600 hover:text-[#0081c1] transition-colors font-medium">Услуги</a>
              <a href="#projects" className="text-slate-600 hover:text-[#0081c1] transition-colors font-medium">Объекты</a>
              <a href="#contact" className="text-slate-600 hover:text-[#0081c1] transition-colors font-medium">Контакты</a>
              <a href="/employees" className="text-white px-4 py-2 rounded-md font-medium transition-opacity hover:opacity-80" style={{ backgroundColor: "#0081c1" }}>
                Сотрудникам
              </a>
            </div>
            <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? "X" : "Menu"} size={24} className="text-slate-700" />
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-3">
              <a href="#about" className="text-slate-600 hover:text-[#0081c1] py-1" onClick={() => setMenuOpen(false)}>О компании</a>
              <a href="#services" className="text-slate-600 hover:text-[#0081c1] py-1" onClick={() => setMenuOpen(false)}>Услуги</a>
              <a href="#projects" className="text-slate-600 hover:text-[#0081c1] py-1" onClick={() => setMenuOpen(false)}>Объекты</a>
              <a href="#contact" className="text-slate-600 hover:text-[#0081c1] py-1" onClick={() => setMenuOpen(false)}>Контакты</a>
              <a href="/employees" className="text-white px-4 py-2 rounded-md font-medium w-fit" style={{ backgroundColor: "#0081c1" }}>Сотрудникам</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 text-white" style={{ backgroundColor: "#0081c1" }}>
                Республика Карелия
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Проектирование и монтаж{" "}
                <span style={{ color: "#0081c1" }}>газопроводов</span> и газового оборудования
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Полный цикл работ — от проектирования до пуско-наладки. Строительство теплоэнергетических объектов,
                монтаж котельного оборудования и автоматизация технологических процессов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-white font-semibold" style={{ backgroundColor: "#0081c1" }}
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                  Получить консультацию
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
                <Button variant="outline" size="lg"
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
                  Наши услуги
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl p-8 text-white" style={{ background: "linear-gradient(135deg, #0081c1 0%, #005a8e 100%)" }}>
                <h3 className="text-xl font-bold mb-6">Почему выбирают АТН</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                      <Icon name="ShieldCheck" size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Лицензированная деятельность</p>
                      <p className="text-blue-100 text-sm">Все работы выполняются в соответствии с нормами и стандартами</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                      <Icon name="Wrench" size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Полный цикл работ</p>
                      <p className="text-blue-100 text-sm">Проектирование, монтаж, пуско-наладка под ключ</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                      <Icon name="MapPin" size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Работаем в Карелии</p>
                      <p className="text-blue-100 text-sm">Местная команда, быстрые сроки, знание региона</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">О компании</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              ООО Компания АТН — надёжный партнёр в сфере газоснабжения и теплоэнергетики Республики Карелия
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Профессиональный подход к каждому объекту</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Мы специализируемся на проектировании и монтаже газопроводов, газового и котельного оборудования.
                Компания выполняет полный комплекс работ — от технического проектирования до пуско-наладки
                и автоматизации технологических процессов.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Наша команда профессионалов обеспечивает высокое качество всех видов работ в строгом соответствии
                с действующими нормами и правилами безопасности.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-xl bg-blue-50">
                  <div className="text-3xl font-bold mb-1" style={{ color: "#0081c1" }}>10+</div>
                  <div className="text-sm text-slate-600">лет на рынке</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-blue-50">
                  <div className="text-3xl font-bold mb-1" style={{ color: "#0081c1" }}>100+</div>
                  <div className="text-sm text-slate-600">объектов сдано</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Flame", label: "Газопроводы" },
                { icon: "Thermometer", label: "Котельное оборудование" },
                { icon: "Cpu", label: "Автоматизация" },
                { icon: "Package", label: "Поставка оборудования" },
              ].map((item) => (
                <div key={item.label} className="p-5 rounded-xl border border-slate-200 flex flex-col items-center gap-3 text-center hover:border-[#0081c1] transition-colors">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#e6f3fb" }}>
                    <Icon name={item.icon} size={24} style={{ color: "#0081c1" }} />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Полный спектр работ в области газоснабжения и теплоэнергетики
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Building2",
                color: "#0081c1",
                bg: "#e6f3fb",
                title: "Строительство теплоэнергетических объектов",
                desc: "Проектирование и строительство объектов теплоснабжения «под ключ». Соответствие всем техническим регламентам и нормам безопасности.",
                points: ["Котельные малой и средней мощности", "Тепловые пункты", "Техническое проектирование", "Сдача объекта в эксплуатацию"],
              },
              {
                icon: "GitBranch",
                color: "#0081c1",
                bg: "#e6f3fb",
                title: "Монтаж наружного газопровода",
                desc: "Прокладка надземных и подземных газопроводов с соблюдением всех норм и правил. Надёжные и долговечные решения.",
                points: ["Надземные газопроводы", "Подземные газопроводы", "Прокладка в траншеях и футлярах", "Испытания и приёмка"],
              },
              {
                icon: "Home",
                color: "#0081c1",
                bg: "#e6f3fb",
                title: "Монтаж внутридомовой газовой системы",
                desc: "Установка и подключение газового оборудования внутри зданий. Жилые дома, административные и производственные здания.",
                points: ["Разводка газовых сетей", "Подключение плит и котлов", "Монтаж регуляторов давления", "Проверка герметичности"],
              },
              {
                icon: "Flame",
                color: "#0081c1",
                bg: "#e6f3fb",
                title: "Монтаж котельного оборудования",
                desc: "Установка котлов и вспомогательного оборудования. Пуско-наладочные работы с выдачей технической документации.",
                points: ["Монтаж котлов любой мощности", "Обвязка оборудования", "Пуско-наладочные работы", "Технический паспорт объекта"],
              },
              {
                icon: "Cpu",
                color: "#0081c1",
                bg: "#e6f3fb",
                title: "Автоматизация технологических процессов",
                desc: "Внедрение систем автоматического управления и контроля теплоэнергетического оборудования.",
                points: ["Системы АСУ ТП", "Диспетчеризация", "Программирование контроллеров", "Удалённый мониторинг"],
              },
              {
                icon: "Package",
                color: "#0081c1",
                bg: "#e6f3fb",
                title: "Поставка оборудования автоматизации",
                desc: "Подбор и поставка приборов, контроллеров и комплектующих для систем автоматизации от проверенных производителей.",
                points: ["Датчики и приборы учёта", "Промышленные контроллеры", "Запорная арматура", "Официальная гарантия"],
              },
            ].map((s) => (
              <Card key={s.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: s.bg }}>
                    <Icon name={s.icon} size={24} style={{ color: s.color }} />
                  </div>
                  <CardTitle className="text-base leading-snug">{s.title}</CardTitle>
                  <CardDescription>{s.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5 text-sm text-slate-600">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <Icon name="Check" size={14} className="mt-0.5 shrink-0" style={{ color: "#0081c1" }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Реализованные объекты</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Примеры наших работ в Республике Карелия
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0081c1 0%, #005a8e 100%)" }}>
                <div className="text-center text-white">
                  <Icon name="Building2" size={48} className="mx-auto mb-3 opacity-80" />
                  <p className="font-semibold text-lg">Котельная</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Монтаж котельной в Петрозаводске</CardTitle>
                <CardDescription>
                  Полный комплекс работ по монтажу котельного оборудования и систем автоматизации для жилого комплекса.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Котельное оборудование</Badge>
                  <Badge variant="outline">АСУ ТП</Badge>
                  <Badge variant="outline">Пуско-наладка</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #005a8e 0%, #003d61 100%)" }}>
                <div className="text-center text-white">
                  <Icon name="GitBranch" size={48} className="mx-auto mb-3 opacity-80" />
                  <p className="font-semibold text-lg">Газопровод</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Наружный газопровод низкого давления</CardTitle>
                <CardDescription>
                  Прокладка подземного газопровода для газификации жилого квартала. Протяжённость — 1,2 км.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Подземный газопровод</Badge>
                  <Badge variant="outline">Низкое давление</Badge>
                  <Badge variant="outline">Испытания</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Готовы ответить на ваши вопросы и рассчитать стоимость работ
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Оставьте заявку или позвоните нам — специалист проконсультирует по вашему проекту и подберёт
                оптимальное решение.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "#0081c1" }}>
                    <Icon name="Phone" size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Телефон / Факс</p>
                    <p className="text-slate-300">8 (8142) 78-27-12</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "#0081c1" }}>
                    <Icon name="Mail" size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <p className="text-slate-300">atmcompany@mail.ru</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "#0081c1" }}>
                    <Icon name="MapPin" size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-slate-300">Республика Карелия, 185035, г. Петрозаводск,<br />ул. Кирова, д. 5, офис 404-405</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "#0081c1" }}>
                    <Icon name="Clock" size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Часы работы</p>
                    <p className="text-slate-300">Пн–Пт: 9:00 – 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Оставить заявку</CardTitle>
                <CardDescription className="text-slate-300">
                  Расскажите о вашем проекте — мы свяжемся в рабочее время.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Имя</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2"
                      style={{ outline: "none" }}
                      placeholder="Иван"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Организация</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2"
                      placeholder="ООО Пример"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Телефон</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Описание проекта</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 resize-none"
                    placeholder="Кратко опишите объект и вид работ..."
                  />
                </div>
                <Button className="w-full text-white font-semibold" style={{ backgroundColor: "#0081c1" }}>
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ backgroundColor: "#0081c1" }}>
                <Icon name="Flame" size={15} className="text-white" />
              </div>
              <span className="font-semibold text-white">ООО Компания АТН</span>
            </div>
            <p className="text-sm text-center">
              © {new Date().getFullYear()} ООО Компания АТН. Все права защищены.
            </p>
            <p className="text-sm">Петрозаводск, ул. Кирова, д. 5</p>
          </div>
        </div>
      </footer>
    </div>
  )
}