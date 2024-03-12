
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RebatePage(){
    return (
        <div className="w-[98%] min-h-[91svh] bg-[#222831] text-white rounded-lg mx-auto my-auto overflow-y-auto overflow-x-hidden">
            <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Rebated Students</h1>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <Card>
                <CardHeader>
                  <CardTitle>Today's Rebated Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold">5</p>
                    <div className="text-gray-500">As of March 12, 2024</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Tomorrow's Rebated Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold">7</p>
                    <div className="text-gray-500">As of March 13, 2024</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <Card>
            <CardContent className="p-0 grid">
              <div className="sm:overflow-auto">
                <Table className="min-w-[800px]">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student Name</TableHead>
                      <TableHead>Room Number</TableHead>
                      <TableHead>Rebate Start Date</TableHead>
                      <TableHead>Rebate End Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>John Doe</TableCell>
                      <TableCell>101</TableCell>
                      <TableCell>2024-04-01</TableCell>
                      <TableCell>2024-04-15</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jane Smith</TableCell>
                      <TableCell>102</TableCell>
                      <TableCell>2024-04-01</TableCell>
                      <TableCell>2024-04-15</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Mike Johnson</TableCell>
                      <TableCell>103</TableCell>
                      <TableCell>2024-04-01</TableCell>
                      <TableCell>2024-04-15</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Amy Lee</TableCell>
                      <TableCell>104</TableCell>
                      <TableCell>2024-04-01</TableCell>
                      <TableCell>2024-04-15</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>David Brown</TableCell>
                      <TableCell>105</TableCell>
                      <TableCell>2024-04-01</TableCell>
                      <TableCell>2024-04-15</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Check Rebate Count</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4 md:gap-6">
                <div className="grid gap-2">
                  <Label className="text-base" htmlFor="future-date">
                    Select Future Date
                  </Label>
                  <Input id="future-date" type="date" />
                </div>
                <div className="flex justify-end">
                  <Button>Check</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
    )
}