"use client"

import Pagination from "@/components/common/Pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState } from "react";

export default function PaymentList() {

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const payments = [
    {
      id: "01",
      payDate: "25/02/2025",
      buyerList: "Jenny Wilson",
      country: "USA",
      company: "Kappa - Kappa Corporation",
      businessType: "Supplier",
      planType: "Monthly",
      paymentMethod: "Stripe",
    },
    {
      id: "02",
      payDate: "25/02/2025",
      buyerList: "Bessie Cooper",
      country: "Tajikistan",
      company: "Kappa - Kappa Corporation",
      businessType: "Supplier",
      planType: "6 Month",
      paymentMethod: "Stripe",
    },
    {
      id: "03",
      payDate: "25/02/2025",
      buyerList: "Jane Cooper",
      country: "Greece",
      company: "Kappa - Kappa Corporation",
      businessType: "Supplier",
      planType: "1 Year",
      paymentMethod: "Stripe",
    },
    {
      id: "04",
      payDate: "25/02/2025",
      buyerList: "Annette Black",
      country: "Central African",
      company: "Kappa - Kappa Corporation",
      businessType: "Supplier",
      planType: "Monthly",
      paymentMethod: "Stripe",
    },
    {
      id: "05",
      payDate: "25/02/2025",
      buyerList: "Dianne Russell",
      country: "Russia",
      company: "Kappa - Kappa Corporation",
      businessType: "Supplier",
      planType: "12 Month",
      paymentMethod: "Stripe",
    },
    {
      id: "06",
      payDate: "25/02/2025",
      buyerList: "Marvin McKinney",
      country: "Principe",
      company: "Kappa - Kappa Corporation",
      businessType: "Supplier",
      planType: "8 Month",
      paymentMethod: "Stripe",
    },
    {
      id: "07",
      payDate: "25/02/2025",
      buyerList: "Jerome Bell",
      country: "Bahrain",
      company: "Kappa - Kappa Corporation",
      businessType: "Supplier",
      planType: "6 Month",
      paymentMethod: "Stripe",
    },
    {
      id: "08",
      payDate: "25/02/2025",
      buyerList: "Arlene McCoy",
      country: "Viet Nam",
      company: "Kappa - Kappa Corporation",
      businessType: "Supplier",
      planType: "Yearly",
      paymentMethod: "Stripe",
    },
    {
      id: "09",
      payDate: "25/02/2025",
      buyerList: "Guy Hawkins",
      country: "Monaco",
      company: "Kappa - Kappa Corporation",
      businessType: "Supplier",
      planType: "6 Month",
      paymentMethod: "Stripe",
    },
  ]

  return (
    <div className="p-6 px-10 space-y-6 bg-[#F6F6F6] min-h-screen">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-4">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold">Payment List</h1>
          {/* <div className="flex items-center gap-4">
            <select className="h-8 rounded-md border bg-background px-2 py-1 text-sm">
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </div> */}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border border-customBlue rounded-lg p-6 flex items-center justify-between bg-white">
          <div>
            <p className="text-sm text-muted-foreground">Total Amount</p>
            <p className="text-2xl font-bold">
              $58,764.<span className="text-muted-foreground">25</span>
            </p>
          </div>
          <div className="bg-blue-100 p-2 rounded-full">
            <span className="text-blue-600 text-xl">$</span>
          </div>
        </div>
        <div className="border border-customBlue rounded-lg p-6 flex items-center justify-between bg-white">
          <div>
            <p className="text-sm text-muted-foreground">Supplier Amount</p>
            <p className="text-2xl font-bold">
              $564.<span className="text-muted-foreground">25</span>
            </p>
          </div>
          <div className="bg-blue-100 p-2 rounded-full">
            <span className="text-blue-600 text-xl">$</span>
          </div>
        </div>
        <div className="border border-customBlue rounded-lg p-6 flex items-center justify-between bg-white">
          <div>
            <p className="text-sm text-muted-foreground">Buyer Amount</p>
            <p className="text-2xl font-bold">
              $58,764.<span className="text-muted-foreground">25</span>
            </p>
          </div>
          <div className="bg-indigo-100 p-2 rounded-full">
            <span className="text-indigo-600 text-xl">₿</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-4">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">Payment History</h2>
        </div>

        {/* <div className="flex items-center gap-2">
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

      <div className="border rounded-lg bg-white p-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>SL.</TableHead>
              <TableHead>Pay Date</TableHead>
              <TableHead>Buyer List</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Company Name</TableHead>
              <TableHead>B. Type</TableHead>
              <TableHead>Plan Type</TableHead>
              <TableHead>P. Method</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>{payment.id}</TableCell>
                <TableCell>{payment.payDate}</TableCell>
                <TableCell>{payment.buyerList}</TableCell>
                <TableCell>{payment.country}</TableCell>
                <TableCell>{payment.company}</TableCell>
                <TableCell>{payment.businessType}</TableCell>
                <TableCell>{payment.planType}</TableCell>
                <TableCell>{payment.paymentMethod}</TableCell>
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

