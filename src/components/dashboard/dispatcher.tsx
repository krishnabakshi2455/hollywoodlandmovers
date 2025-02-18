"use client";

import * as React from "react";
import {
    ColumnDef,
    SortingState,
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    flexRender,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export type User = {
    id: string;
    username: string;
    email: string;
    role: "Driver" | "Dispatcher" | null;
};

const initialData: User[] = [
    { id: "1", username: "JohnDoe", email: "john.doe@example.com", role: "Driver" },
    { id: "2", username: "JaneSmith", email: "jane.smith@example.com", role: "Dispatcher" },
    { id: "3", username: "MarkBrown", email: "mark.brown@example.com", role: null },
    { id: "4", username: "EmilyClark", email: "emily.clark@example.com", role: "Driver" },
];

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "username",
        header: "Username",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "role",
        header: "Role",
        cell: ({ row }) => row.original.role || "No Role Assigned",
    },
];

export default function Admin() {
    const [data] = React.useState<User[]>(initialData);
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [search, setSearch] = React.useState("");

    // Filter data to show only drivers and apply search query
    const filteredData = React.useMemo(() => {
        return data.filter((user) => {
            const isDriver = user.role === "Driver";
            const matchesSearch =
                user.username.toLowerCase().includes(search.toLowerCase()) ||
                user.email.toLowerCase().includes(search.toLowerCase());
            return isDriver && matchesSearch;
        });
    }, [data, search]);

    const table = useReactTable({
        data: filteredData,
        columns,
        state: { sorting },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <div className="flex flex-col items-center justify-center w-full h-full space-y-8">
        
            <div className="w-1/2 space-y-4 mt-52">
                {/* Search Section */}
                <div className="flex items-center space-x-4">
                    <Input
                        type="text"
                        placeholder="Search by username or email..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Table Section */}
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHead>
                                    ))}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow key={row.id}>
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={columns.length} className="text-center">
                                        No results found.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
