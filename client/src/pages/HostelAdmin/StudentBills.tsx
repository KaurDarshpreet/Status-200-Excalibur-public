import {Card, CardContent} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { useState } from 'react'
import {Dialog, DialogContent, DialogTitle, DialogClose, DialogTrigger} from '@/components/ui/dialog'

export const StudentBills = () => {

  const [bills, setBills] = useState([
    {
      id: 1,
      name: "Ankit Kumar",
      rollNo: "12287890",
      amount: "1000",
      status: "Paid"
    },
    {
      id: 2,
      name: "Ankit Kumar",
      rollNo: "12287890",
      amount: "1000",
      status: "Pending"
    },
    {
      id: 3,
      name: "Ankit Kumar",
      rollNo: "12287890",
      amount: "1000",
      status: "Pending"
    }
  ])
  
  function handleOnChange(e: any) {
    setBills((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <div className='w-[90%] min-h-[90svh] mx-auto my-auto flex flex-col justify-cente'>
      <h1 className='text-2xl font-bold m-2 text-center text-white'>Student Bills</h1>
      <div className='flex flex-col mb-auto justify-between items-center ml-auto w-full max-h-[70svh] overflow-y-auto customScrollbar'>
        {
          bills.map((bill, index) => (
            <Card key={index} className='flex w-3/4'>
              <CardContent className='flex items-center pb-0 p-2 justify-center w-full'>
                <div className='flex justify-between items-center'>
                  <Avatar>
                    <AvatarImage src='https://randomuser.me/api/portraits/m' />
                    <AvatarFallback>
                      {bill.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className='text-lg font-bold'>{bill.name}</h2>
                    <p className='text-sm'>{bill.rollNo}</p>
                  </div>
                </div>
                <div className='ml-auto mr-2'>
                  <p className='text-sm'>{bill.status}</p>
                </div>
                <div className=''>
                  <Button className='w-full'>View Bill</Button>
                </div>
              </CardContent>
            </Card>
          ))
        }
      </div>
      {/* Add new Bill */}
      <Dialog>
        <DialogTrigger>
          <Button className='mt-auto' variant={'outline'}>Add Bill</Button>
        </DialogTrigger>
        <DialogContent>
          <div className='flex flex-col'>
            <h1 className='text-2xl font-bold m-2 text-center text-white'>Add Bill</h1>
            <form className='flex flex-col items-center'>
              <input type='text' name='name' placeholder='Name' className='w-3/4 p-2 m-2 rounded-md' onChange={handleOnChange} />
              <input type='text' name='rollno' placeholder='Roll No' className='w-3/4 p-2 m-2 rounded-md'onChange={handleOnChange} />
              <input type='text' name='amount' placeholder='Amount' className='w-3/4 p-2 m-2 rounded-md' onChange={handleOnChange} />
              <input type='text' name='status' placeholder='Status' className='w-3/4 p-2 m-2 rounded-md' onChange={handleOnChange} />
              <Button className='w-3/4 m-2'>Add Bill</Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
