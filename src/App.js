import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Menu, LayoutDashboard, Settings, LogOut } from "lucide-react";

const data = [
  { name: "Ene", value: 410 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 210 },
  { name: "Abr", value: 280 },
  { name: "May", value: 190 },
  { name: "Jun", value: 250 },
];

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className={`transition-all duration-300 ${sidebarOpen ? "w-64" : "w-16"} bg-white shadow-md p-4`}>
        <div className="flex items-center justify-between">
          <h1 className={`text-xl font-bold ${!sidebarOpen && "hidden"}`}>PRUEBA</h1>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu />
          </button>
        </div>
        <nav className="mt-6">
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-2">
              <LayoutDashboard /> {sidebarOpen && "Dashboard"}
            </li>
            <li className="flex items-center gap-2">
              <Settings /> {sidebarOpen && "Configuración"}
            </li>
            <li className="flex items-center gap-2 text-red-600 mt-6">
              <LogOut /> {sidebarOpen && "Salir"}
            </li>
          </ul>
        </nav>
      </div>
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-6">Cifras que confirman que Miguel es Gay</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-gray-500">Citas</p>
            <p className="text-2xl font-bold">$12,300</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-gray-500">Hombres</p>
            <p className="text-2xl font-bold">845</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-gray-500">Damas</p>
            <p className="text-2xl font-bold">23</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-4">Actividad Mensual</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
}
