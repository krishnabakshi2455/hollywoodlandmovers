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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export type User = {
  id: string;
  username: string;
  email: string;
  role: "Driver" | "Dispatcher" | null;
};

// Extend TableMeta to include the updateRole function
declare module "@tanstack/react-table" {
  interface TableMeta<TData> {
    updateRole: (id: string, role: User["role"]) => void;
  }
}

const initialData: User[] = [
  { id: "1", username: "JohnDoe", email: "john.doe@example.com", role: null },
  { id: "2", username: "JaneSmith", email: "jane.smith@example.com", role: null },
  { id: "3", username: "MarkBrown", email: "mark.brown@example.com", role: null },
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
    id: "role",
    header: "Role",
    cell: ({ row, table }) => {
      const rowData = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{rowData.role || "Select Role"}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {["Driver", "Dispatcher"].map((role) => (
              <DropdownMenuItem
                key={role}
                onClick={() => {
                  if (table.options.meta?.updateRole) {
                    table.options.meta.updateRole(rowData.id, role as User["role"]);
                  }
                }}
                disabled={rowData.role === role}
              >
                {role}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function Admin() {
  const [data, setData] = React.useState<User[]>(initialData);
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const updateRole = (id: string, role: User["role"]) => {
    setData((prevData) =>
      prevData.map((user) =>
        user.id === id ? { ...user, role } : user
      )
    );
  };

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    meta: {
      updateRole,
    },
  });

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
