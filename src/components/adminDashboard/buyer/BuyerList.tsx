"use client"

import Pagination from "@/components/common/Pagination"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {  NotebookText } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function BuyerList() {

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const buyers = [
    {
      id: "01",
      name: "Jenny Wilson",
      country: "Bangladesh",
      company: "Kappa - Kappa Corporation",
      tradeLicense: "image",
      products: "Computer IT",
    },
    {
      id: "02",
      name: "Arlene McCoy",
      country: "USA",
      company: "Kappa - Kappa Corporation",
      tradeLicense: "image",
      products: "Computer IT",
    },
    {
      id: "03",
      name: "Dianne Russell",
      country: "Canada",
      company: "Kappa - Kappa Corporation",
      tradeLicense: "image",
      products: "Computer IT",
    },
    {
      id: "04",
      name: "Guy Hawkins",
      country: "London",
      company: "Kappa - Kappa Corporation",
      tradeLicense: "image",
      products: "Computer IT",
    },
    {
      id: "05",
      name: "Kathryn Murphy",
      country: "Bangladesh",
      company: "Kappa - Kappa Corporation",
      tradeLicense: "image",
      products: "Computer IT",
    },
    {
      id: "06",
      name: "Bessie Cooper",
      country: "Bangladesh",
      company: "Kappa - Kappa Corporation",
      tradeLicense: "image",
      products: "Computer IT",
    },
    {
      id: "07",
      name: "Jacob Jones",
      country: "Bangladesh",
      company: "Kappa - Kappa Corporation",
      tradeLicense: "image",
      products: "Computer IT",
    },
    {
      id: "08",
      name: "Albert Flores",
      country: "Bangladesh",
      company: "Kappa - Kappa Corporation",
      tradeLicense: "image",
      products: "Computer IT",
    },
    {
      id: "09",
      name: "Leslie Alexander",
      country: "Bangladesh",
      company: "Kappa - Kappa Corporation",
      tradeLicense: "image",
      products: "Computer IT",
    },
    {
      id: "10",
      name: "Kristin Watson",
      country: "Bangladesh",
      company: "Kappa - Kappa Corporation",
      tradeLicense: "image",
      products: "Computer IT",
    },
    {
      id: "11",
      name: "Ronald Richards",
      country: "Bangladesh",
      company: "Kappa - Kappa Corporation",
      tradeLicense: "image",
      products: "Computer IT",
    },
    {
      id: "12",
      name: "Eleanor Pena",
      country: "Bangladesh",
      company: "Kappa - Kappa Corporation",
      tradeLicense: "image",
      products: "Computer IT",
    },
    {
      id: "13",
      name: "Kathryn Murphy",
      country: "Bangladesh",
      company: "Kappa - Kappa Corporation",
      tradeLicense: "image",
      products: "Computer IT",
    },
  ]

  return (
    <div className="p-6 px-10 space-y-6 bg-[#F6F6F6] min-h-screen">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-4">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold">Buyer List</h1>
          <p className="text-sm text-gentle">View, manage Buyer List.</p>
        </div>
{/* 
        <div className="flex items-center gap-2">
          <div className="relative flex-1 max-w-sm">
            <Input
              type="search"
              placeholder="Search"
              className="pl-12 bg-[#F5F5F5] border-none rounded-xl py-[24px] text-[14px] leading-5"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <svg width="24" height="24" viewBox="0 0 15 15" fill="none" className="text-muted-foreground">
                <path
                  d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <button className="bg-white text-black text-sm font-medium flex items-center justify-between gap-2 border border-strokeSheen px-3 py-[12px] rounded-lg">
            <Filter className="h-5 w-5" />
          </button>
        </div> */}
      </div>

      <div className="border rounded-lg bg-white  p-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>SL.</TableHead>
              <TableHead>Buyer List</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Company Name</TableHead>
              <TableHead>Trade License</TableHead>
              <TableHead>Products</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {buyers.map((buyer) => (
              <TableRow key={buyer.id}>
                <TableCell>{buyer.id}</TableCell>
                <TableCell>{buyer.name}</TableCell>
                <TableCell>{buyer.country}</TableCell>
                <TableCell>{buyer.company}</TableCell>
                <TableCell>
                  <Link href="#" className="text-blue-600 hover:underline flex items-center gap-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14 5.33333V14H2V2H10.6667"
                        stroke="#0066FF"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.6667 1H14.0001V2.33333"
                        stroke="#0066FF"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 8.66667V4.66667"
                        stroke="#0066FF"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 6.66667H10"
                        stroke="#0066FF"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.0001 1L9.33342 5.66667"
                        stroke="#0066FF"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Image
                  </Link>
                </TableCell>
                <TableCell>{buyer.products}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <Link href="/dashboard/buyer/1"><NotebookText /></Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-col gap-2 md:flex-row items-center justify-center">
        {/* <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Show</span>
          <select className="h-8 rounded-md border bg-background px-2 py-1 text-sm">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          <span className="text-sm text-muted-foreground">from 286</span>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="outline" size="icon">
            «
          </Button>
          <Button className="hidden sm:block" variant="outline" size="icon">
            ‹
          </Button>
          <Button variant="outline" size="icon" className="bg-primary text-primary-foreground">
            1
          </Button>
          <Button variant="outline" size="icon">
            2
          </Button>
          <span className="mx-2">...</span>
          <Button variant="outline" size="icon">
            10
          </Button>
          <Button className="hidden sm:block" variant="outline" size="icon">
            ›
          </Button>
          <Button variant="outline" size="icon">
            »
          </Button>
        </div> */}
                <Pagination
          currentPage={currentPage}
          totalPages={10}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
}

