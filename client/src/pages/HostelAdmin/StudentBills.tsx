import {Card, CardContent} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { useState } from 'react'
import {Dialog, DialogContent, DialogClose, DialogTrigger} from '@/components/ui/dialog'

export const StudentBills = () => {

  const [bills, setBills] = useState([
    {
      name: "Ankit Kumar",
      rollNo: 12287890,
      amount: 1000,
      status: "Paid"
    },
    {
      name: "Bobby Kumar",
      rollNo: 12287891,
      amount: 1000,
      status: "Pending"
    },
    {
      name: "Dinesh Kumar",
      rollNo: 12287892,
      amount: 1000,
      status: "Pending"
    }
  ])
  
  const [newBill, setNewBill] = useState({
    name: '',
    rollNo: 0,
    amount: 0,
  })

  function handleOnChange(e: any) {
    setNewBill({
      ...newBill,
      [e.target.name]: e.target.value
    
    })
  }
  function handleOnSubmit() {
    // If a bill is already issued on that roll no, then update that bill, else add a new bill
    let index = bills.findIndex(bill => bill.rollNo == newBill.rollNo)
    if(index > -1) {
      let newBills = [...bills]
      newBills[index] = {
        ...newBills[index],
        amount: newBill.amount,
        status: 'Pending'
      }
      setBills(newBills)
    } else {
      setBills([...bills, {...newBill, status: 'Pending'}])
    }
  }
  
  return (
    <div className='w-[90%] min-h-[90svh] mx-auto my-auto flex flex-col justify-cente'>
      <h1 className='text-2xl font-bold m-2 text-center text-white'>Pending Student Bills</h1>
      <div className='flex flex-col mb-auto justify-between items-center ml-auto w-full max-h-[70svh] overflow-y-auto customScrollbar'>
        {
          bills.map((bill, index) => (bill.status === 'Pending' &&
            <Card key={index} className='flex w-3/4'>
              <CardContent className='flex items-center pb-0 p-2 justify-center w-full'>
                <div className='flex justify-between items-center gap-2'>
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
        <DialogContent className='bg-black text-white'>
          <div className='flex flex-col'>
            <h1 className='text-2xl font-bold m-2 text-center text-white'>Add Bill</h1>
            <div className='flex flex-col items-center text-black'>
              <input type='text' name='name' placeholder='Name' className='w-3/4 p-2 m-2 rounded-md' onChange={handleOnChange} />
              <input type='number' name='rollNo' placeholder='Roll No' className='w-3/4 p-2 m-2 rounded-md'onChange={handleOnChange} />
              <input type='number' name='amount' placeholder='Amount (in Rs.)' className='w-3/4 p-2 m-2 rounded-md' onChange={handleOnChange} />
              <DialogClose><Button className='w-3/4 m-2' onClick={handleOnSubmit}>Add Bill</Button></DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
