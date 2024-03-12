import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"


// import { useState } from "react";
  
interface ButtonProps {
   name: string;
   handleOnClick: () => void;
}

const MyButton = ({ name, handleOnClick }: ButtonProps) => {
  return (
      <button onClick={handleOnClick} className="bg-[#00FFF5] text-slate-700 font-semibold rounded p-2 text-lg  transition-all shadow-[0_0_10px_#00FFF5] hover:shadow-none">{name}</button>
  )
}

export const RebateForm = () => {
    // const [rebate, setRebate] = useState({
    //     from: Date.now(),
    //     to: Date.now(),
    //     reason: ''
    // })
  return (
    <Dialog>
        <DialogTrigger>
            <MyButton 
                name="Rebate Form" 
                handleOnClick={() => {}}
            />
        </DialogTrigger>
      <DialogContent className="bg-black text-white">
        <DialogHeader>
            <DialogTitle className="sm:text-4xl text-3xl mb-4">Request a Mess Rebate</DialogTitle>
            <DialogDescription>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="from" className="text-xl">From</Label>
                <Input className="w-full" id="from" placeholder="Enter your email" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="to" className="text-xl">To</Label>
                <Input className="w-full" id="to" placeholder="Enter your email" type="date" />
              </div>
            </div>
            <div className="space-y-2 my-3">
              <Label htmlFor="reason" className="text-xl">Reason</Label>
              <Textarea className="min-h-[100px]" id="reason" placeholder="Enter your message" />
            </div>
            <div className="flex justify-end mt-2">
                <Button size="sm" className="outline hover:bg-white hover:text-black">Submit</Button>
            </div>
            </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>

  )
}
