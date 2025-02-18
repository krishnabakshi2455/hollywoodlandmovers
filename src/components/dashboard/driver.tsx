"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const DriverDashboard: React.FC = () => {
    const [driver, setDriver] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchDriverDetails = async () => {
            try {
                const token = localStorage.getItem("token");
                console.log("Stored Token:", token); // Debugging

                if (!token) {
                    setError("🚨 No token found. Please log in again.");
                    setLoading(false);
                    return;
                }

                const response = await axios.get("http://localhost:3000/api/driverapi", {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,  // Ensure token is correctly attached
                    },
                });

                console.log("Driver data:", response.data);
                setDriver(response.data.data); // Update state with fetched data
            } catch (err: any) {
                console.error("Error fetching driver details:", err);
                setError("Failed to fetch driver details.");
            } finally {
                setLoading(false);
            }
        };

        fetchDriverDetails();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Driver Dashboard</h1>
            <div className="mt-4">
                <p><strong>Name:</strong> {driver?.username}</p>
                <p><strong>Email:</strong> {driver?.email}</p>
                <p><strong>Role:</strong> {driver?.role}</p>
            </div>
        </div>
    );
};

export default DriverDashboard;
