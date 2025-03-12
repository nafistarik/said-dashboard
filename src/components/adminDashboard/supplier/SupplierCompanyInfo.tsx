import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function SupplierCompanyInfo() {
  return (
    <div className="p-6 px-10 space-y-6 bg-[#F6F6F6] min-h-screen">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-xl">
            P&G
          </div>
          <div>
            <h1 className="text-2xl font-semibold">BD-Selling</h1>
            <p className="text-sm text-muted-foreground">Seller Partner</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="bg-gray-100">
            Delete Supplier
          </Button>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">Verify Supplier</Button>
        </div>
      </div>

      <div className="space-y-6">
        <div className="border rounded-lg p-6 space-y-6">
          <h2 className="text-xl font-semibold">Company Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Company Name*</Label>
              <p className="text-gray-600">BD-Selling</p>
            </div>

            <div className="space-y-2">
              <Label>Country Name*</Label>
              <p className="text-gray-600">Brazil</p>
            </div>

            <div className="space-y-2">
              <Label>Company Establish*</Label>
              <p className="text-gray-600">20-10-2004</p>
            </div>

            <div className="space-y-2">
              <Label>Number of Employees*</Label>
              <p className="text-gray-600">+100 (Employees)</p>
            </div>

            <div className="space-y-2">
              <Label>Company Website (URL)*</Label>
              <p className="text-gray-600">https://www.globalbusinesslist.com/</p>
            </div>

            <div className="space-y-2">
              <Label>Business Identification Number*</Label>
              <p className="text-gray-600">4167834</p>
            </div>

            <div className="space-y-2">
              <Label>Trade License*</Label>
              <div className="flex items-center gap-2">
                <div className="border rounded p-2 flex items-center gap-2 bg-gray-50">
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
                  37650
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-6 space-y-6">
          <h2 className="text-xl font-semibold">About Your Business</h2>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Business Type*</Label>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Checkbox id="manufacturing" checked disabled />
                  <Label htmlFor="manufacturing">Manufacturing</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="buyer" checked disabled />
                  <Label htmlFor="buyer">Buyer</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="exporter" checked disabled />
                  <Label htmlFor="exporter">Exporter</Label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Business Category*</Label>
              <p className="text-gray-600">Construction & Real state</p>
            </div>

            <div className="space-y-2">
              <Label>Sub-Category*</Label>
              <p className="text-gray-600">Safety & Security Equipment</p>
            </div>

            <div className="space-y-2">
              <Label>About Company*</Label>
              <p className="text-gray-600">
                At Bobs Builders, we believe that everyone deserves to live safe and confident in the world. Located in Brazil, our expert engineers focus on delivering cutting-edge safety and security solutions for all sectors and facility. Our team combines fundamentals, latest safety, and diverse techniques to fully customize experiences. With over 15 years of experience in the industry, our products provide the reliability and durability our customers need. We are committed to safety.
              </p>
            </div>

            <div className="space-y-2">
              <Label>Main Products*</Label>
              <p className="text-gray-600">Metal Plate, Floor Grating</p>
            </div>

            <div className="space-y-2">
              <Label>Have a Quality Control Policy?</Label>
              <div className="flex items-center gap-2">
                <Checkbox id="quality-control" checked disabled />
                <Label htmlFor="quality-control">Yes</Label>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-6 space-y-6">
          <h2 className="text-xl font-semibold">Company Address</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Company Address*</Label>
              <p className="text-gray-600">Americas Heights, 1235, Wallstreet, 01, Brazil</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Zip / Postal Code*</Label>
                <p className="text-gray-600">4355</p>
              </div>

              <div className="space-y-2">
                <Label>District*</Label>
                <p className="text-gray-600">Brasilia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-6 space-y-6">
          <h2 className="text-xl font-semibold">Contact Person</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>First Name*</Label>
              <p className="text-gray-600">Sabiir</p>
            </div>

            <div className="space-y-2">
              <Label>Last Name*</Label>
              <p className="text-gray-600">Rahman</p>
            </div>

            <div className="space-y-2">
              <Label>E-mail*</Label>
              <p className="text-gray-600">sabiirrahman@gmail.com</p>
            </div>

            <div className="space-y-2">
              <Label>Phone Number*</Label>
              <p className="text-gray-600">+00 01234567890</p>
            </div>

            <div className="space-y-2">
              <Label>Business Identification Number*</Label>
              <p className="text-gray-600">4167834</p>
            </div>

            <div className="space-y-2">
              <Label>Trade License*</Label>
              <div className="flex items-center gap-2">
                <div className="border rounded p-2 flex items-center gap-2 bg-gray-50">
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
                  37650
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-6 space-y-6">
          <h2 className="text-xl font-semibold">Company Owner Info</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>First Name*</Label>
              <p className="text-gray-600">Sabiir</p>
            </div>

            <div className="space-y-2">
              <Label>E-mail*</Label>
              <p className="text-gray-600">sabiirrahman@gmail.com</p>
            </div>

            <div className="space-y-2">
              <Label>Phone Number*</Label>
              <p className="text-gray-600">+00 01234567890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
