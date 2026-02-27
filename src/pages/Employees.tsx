import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const PASSWORD = "atn2024"

const docs = [
  { name: "Правила внутреннего трудового распорядка", icon: "FileText", date: "01.01.2024" },
  { name: "Инструкция по охране труда", icon: "ShieldCheck", date: "15.03.2024" },
  { name: "Регламент по газовой безопасности", icon: "Flame", date: "10.02.2024" },
  { name: "Форма заявления на отпуск", icon: "ClipboardList", date: "01.01.2024" },
  { name: "Положение о премировании", icon: "Star", date: "01.01.2024" },
  { name: "Контакты руководства", icon: "Phone", date: "20.04.2024" },
]

export default function Employees() {
  const [password, setPassword] = useState("")
  const [authenticated, setAuthenticated] = useState(false)
  const [error, setError] = useState(false)

  const handleLogin = () => {
    if (password === PASSWORD) {
      setAuthenticated(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
        <Card className="w-full max-w-md border-0 shadow-xl">
          <CardHeader className="text-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#0081c1" }}>
              <Icon name="Lock" size={32} className="text-white" />
            </div>
            <CardTitle className="text-2xl">Сотрудникам</CardTitle>
            <CardDescription>
              Раздел доступен только сотрудникам ООО Компания АТН.<br />Введите пароль для входа.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Пароль</label>
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false) }}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ focusRingColor: "#0081c1" } as React.CSSProperties}
                placeholder="Введите пароль..."
              />
              {error && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <Icon name="AlertCircle" size={14} />
                  Неверный пароль. Обратитесь к администратору.
                </p>
              )}
            </div>
            <Button
              className="w-full text-white font-semibold"
              style={{ backgroundColor: "#0081c1" }}
              onClick={handleLogin}
            >
              Войти
            </Button>
            <div className="text-center">
              <a href="/" className="text-sm text-slate-500 hover:text-slate-700 transition-colors">
                ← Вернуться на главную
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="bg-white border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#0081c1" }}>
                <Icon name="Flame" size={18} className="text-white" />
              </div>
              <span className="font-bold text-lg text-slate-900">ООО Компания АТН</span>
              <span className="ml-2 text-sm px-2 py-0.5 rounded-full text-white font-medium" style={{ backgroundColor: "#0081c1" }}>Сотрудникам</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="/" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">← На главную</a>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setAuthenticated(false)}
              >
                <Icon name="LogOut" size={14} className="mr-1" />
                Выйти
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Добро пожаловать</h1>
          <p className="text-slate-600">Внутренний портал сотрудников ООО Компания АТН</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <Card className="border-0 shadow-md text-center p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: "#e6f3fb" }}>
              <Icon name="Users" size={24} style={{ color: "#0081c1" }} />
            </div>
            <p className="text-2xl font-bold text-slate-900">25</p>
            <p className="text-sm text-slate-500">Сотрудников</p>
          </Card>
          <Card className="border-0 shadow-md text-center p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: "#e6f3fb" }}>
              <Icon name="Calendar" size={24} style={{ color: "#0081c1" }} />
            </div>
            <p className="text-2xl font-bold text-slate-900">Пн–Пт</p>
            <p className="text-sm text-slate-500">9:00 – 18:00</p>
          </Card>
          <Card className="border-0 shadow-md text-center p-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: "#e6f3fb" }}>
              <Icon name="Phone" size={24} style={{ color: "#0081c1" }} />
            </div>
            <p className="text-lg font-bold text-slate-900">78-27-12</p>
            <p className="text-sm text-slate-500">Приёмная</p>
          </Card>
        </div>

        <h2 className="text-xl font-bold text-slate-900 mb-5">Документы и материалы</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {docs.map((doc) => (
            <Card key={doc.name} className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform" style={{ backgroundColor: "#e6f3fb" }}>
                  <Icon name={doc.icon} size={20} style={{ color: "#0081c1" }} />
                </div>
                <div>
                  <p className="font-medium text-slate-800 text-sm leading-snug">{doc.name}</p>
                  <p className="text-xs text-slate-400 mt-1">Обновлено: {doc.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-0 shadow-md mt-8" style={{ borderLeft: "4px solid #0081c1" }}>
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <Icon name="Info" size={20} style={{ color: "#0081c1" }} className="shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-800 mb-1">Важная информация</p>
                <p className="text-slate-600 text-sm">
                  По вопросам кадрового учёта и документооборота обращайтесь в офис (г. Петрозаводск, ул. Кирова, д. 5, офис 404-405)
                  или по телефону <strong>8 (8142) 78-27-12</strong>.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
