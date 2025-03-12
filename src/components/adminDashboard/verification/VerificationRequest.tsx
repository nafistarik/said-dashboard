"use client"

import Pagination from "@/components/common/Pagination"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {  NotebookText } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function VerificationRequest() {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const verifications = [
    {
      id: "01",
      name: "Jenny Wilson",
      country: "Bangladesh",
      company: "Kappa - Kappa Corporation",
      businessType: "Supplier",
      tradeLicense: "image",
      isVerified: true,
    },
    {
      id: "02",
      name: "Arlene McCoy",
      country: "USA",
      company: "Kappa - Kappa Corporation",
      businessType: "Buyer",
      tradeLicense: "image",
      isVerified: false,
    },
    {
      id: "03",
      name: "Dianne Russell",
      country: "Canada",
      company: "Kappa - Kappa Corporation",
      businessType: "Supplier",
      tradeLicense: "image",
      isVerified: true,
    },
    {
      id: "04",
      name: "Guy Hawkins",
      country: "London",
      company: "Kappa - Kappa Corporation",
      businessType: "Buyer",
      tradeLicense: "image",
      isVerified: false,
    },
    {
      id: "05",
      name: "Kathryn Murphy",
      country: "Bangladesh",
      company: "Kappa - Kappa Corporation",
      businessType: "Buyer",
      tradeLicense: "image",
      isVerified: true,
    },
    {
      id: "06",
      name: "Bessie Cooper",
      country: "Bangladesh",
      company: "Kappa - Kappa Corporation",
      businessType: "Buyer",
      tradeLicense: "image",
      isVerified: false,
    },
    {
      id: "07",
      name: "Jacob Jones",
      country: "Bangladesh",
      company: "Kappa - Kappa Corporation",
      businessType: "Buyer",
      tradeLicense: "image",
      isVerified: true,
    },
    {
      id: "08",
      name: "Albert Flores",
      country: "Bangladesh",
      company: "Kappa - Kappa Corporation",
      businessType: "Buyer",
      tradeLicense: "image",
      isVerified: false,
    },
    {
      id: "09",
      name: "Leslie Alexander",
      country: "Bangladesh",
      company: "Kappa - Kappa Corporation",
      businessType: "Supplier",
      tradeLicense: "image",
      isVerified: true,
    },
    {
      id: "10",
      name: "Kristin Watson",
      country: "Bangladesh",
      company: "Kappa - Kappa Corporation",
      businessType: "Supplier",
      tradeLicense: "image",
      isVerified: false,
    },
    {
      id: "11",
      name: "Ronald Richards",
      country: "Bangladesh",
      company: "Kappa - Kappa Corporation",
      businessType: "Supplier",
      tradeLicense: "image",
      isVerified: true,
    },
    {
      id: "12",
      name: "Eleanor Pena",
      country: "Bangladesh",
      company: "Kappa - Kappa Corporation",
      businessType: "Supplier",
      tradeLicense: "image",
      isVerified: false,
    },
    {
      id: "13",
      name: "Kathryn Murphy",
      country: "Bangladesh",
      company: "Kappa - Kappa Corporation",
      businessType: "Supplier",
      tradeLicense: "image",
      isVerified: true,
    },
  ];

  return (
    <div className="p-6 px-10 space-y-6 bg-[#F6F6F6] min-h-screen">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-4">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold">Verification Request</h1>
          <p className="text-sm text-gentle">You can Verify Supplier and Buyer Business Profile</p>
        </div>
      </div>

      <div className="border rounded-lg bg-white p-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>SL.</TableHead>
              <TableHead>Buyer List</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Company Name</TableHead>
              <TableHead>B. Type</TableHead>
              <TableHead>Trade License</TableHead>
              <TableHead>Verification Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {verifications.map((verification) => (
              <TableRow key={verification.id}>
                <TableCell>{verification.id}</TableCell>
                <TableCell>{verification.name}</TableCell>
                <TableCell>{verification.country}</TableCell>
                <TableCell>{verification.company}</TableCell>
                <TableCell>{verification.businessType}</TableCell>
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
                <TableCell>
                  {verification.isVerified ? "Verified" : "Not Verified"}
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <Link href="/dashboard/verification/1"><NotebookText /></Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-col gap-2 md:flex-row items-center justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
