// components/HeaderStats.tsx
export default function HeaderStats() {
    const stats = [
        { title: 'Unresolved', value: 60 },
        { title: 'Overdue', value: 16 },
        { title: 'Open', value: 43 },
        { title: 'On hold', value: 64 },
    ];

    return (
        <div className="grid grid-cols-4 gap-4 mb-6">
            {stats.map((stat) => (
                <div key={stat.title} className="bg-white p-4 shadow rounded text-center">
                    <h3 className="text-gray-600 text-sm">{stat.title}</h3>
                    <p className="text-2xl font-semibold">{stat.value}</p>
                </div>
            ))}
        </div>
    );
}
