import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Kanban from "./pages/Kanban";
import Calendar from "./pages/Calendar";
import Table from "./pages/Table";
import BarChart from "./pages/BarChart";
import PieChart from "./pages/PieChart";

import './App.css'

function App() {
  
  return (
    <div className="flex">
      <aside className="w-1/5 h-screen bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold mb-6">Admin Panel</h1>
        <nav className="flex flex-col gap-4">
          <Link to="/" className="hover:text-yellow-400">Dashboard</Link>
          <Link to="/kanban" className="hover:text-yellow-400">Kanban</Link>
          <Link to="/calendars" className="hover:text-yellow-400">Calendar</Link>
          <Link to="/table" className="hover:text-yellow-400">Table</Link>
          <Link to="/barchart" className="hover:text-yellow-400">BarChart</Link>
          <Link to="/Piechart" className="hover:text-yellow-400">PieChart</Link>
        </nav>
      </aside>
      <main className="w-4/5 p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/calendars" element={<Calendar />} />
          <Route path="/table" element={<Table />} />
          <Route path="/barchart" element={<BarChart />} />
          <Route path="/piechart" element={<PieChart />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
