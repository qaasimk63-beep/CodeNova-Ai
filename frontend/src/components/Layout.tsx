import { Outlet, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div className="min-h-screen bg-cyber-grid px-4 py-6 text-slate-100 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1600px] gap-6 xl:grid-cols-[280px,1fr]">
        <Sidebar />
        <main className="space-y-6">
          <Navbar />
          <div className="grid gap-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
