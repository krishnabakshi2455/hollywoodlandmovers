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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { SignUpForm } from "@/components/authentication/signup";
import { useEffect, useState } from "react";
import axios from "axios";
export type User = {
  id: string;
  username: string;
  email: string;
  role: "driver" | "dispatcher" | null;
};



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
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/alldriversdispatchers", {
          headers: {
            method: "GET",
          }
        });
        setUsers(response.data);
        console.log("Users agya:", response.data);// eslint-disable-line no-console
      } catch (error) {
        console.error("Error fetching users agya:", error);
      }
    };

    fetchUsers();
  }, [])
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [search, setSearch] = React.useState("");
  const [selectedRole, setSelectedRole] = React.useState<"driver" | "dispatcher" | "All">("All");



  // Filter data based on role and search query
  const filteredData = React.useMemo(() => {
    return users.filter((user) => {
      const matchesRole = selectedRole === "All" || user.role === selectedRole;
      const matchesSearch =
        user.username.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        (user.role && user.role.toLowerCase().includes(search.toLowerCase()));
      return matchesRole && matchesSearch;
    });
  }, [users, search, selectedRole]);

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
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Create Account</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <SignUpForm />
        </DialogContent>
      </Dialog>
      <div className="w-1/2 space-y-4 mt-52">
        {/* Search and Filter Section */}
        <div className="flex items-center space-x-4">
          <Input
            type="text"
            placeholder="Search by username, email, or role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">{selectedRole || "Filter by Role"}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {["All", "driver", "dispatcher"].map((role) => (
                <DropdownMenuItem
                  key={role}
                  onClick={() => setSelectedRole(role as "driver" | "dispatcher" | "All")}
                >
                  {role}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
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
