"use client"
import Sidebar from '@/components/admindashboard/Sidebar';
import HeaderStats from '@/components/admindashboard/HeaderStats';
import LineChart from '@/components/admindashboard/LineChart';

export default function Home() {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 p-6 bg-gray-100">
                <HeaderStats />
                <div className="bg-white p-4 shadow rounded mb-6">
                    <LineChart />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 shadow rounded">
                        <h2 className="font-semibold text-lg mb-4">Unresolved Tickets</h2>
                        {/* Add a list or table */}
                    </div>
                    <div className="bg-white p-4 shadow rounded">
                        <h2 className="font-semibold text-lg mb-4">Tasks</h2>
                        {/* Add a list or tasks */}
                    </div>
                </div>
            </main>
        </div>
    );
}
