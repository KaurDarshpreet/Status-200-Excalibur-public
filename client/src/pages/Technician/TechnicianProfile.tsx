// import { useState } from 'react'

type TechnicianProfileProps = {
    user: {
        profilePhoto: string;
        name: string;
        email: string;
        phone: string;
        address: string;
        category: string;
    }
}

export default function TechnicianProfile({user} : TechnicianProfileProps) {
    
    return (
    <div className="profile flex flex-col items-center gap-2 bg-black min-w-[20svw] h-max mb-auto mt-5 rounded-md p-4">
        <div className="profile_pic w-[150px] h-[150px] rounded-full bg-slate-700 flex items-center justify-center">
            <img src={user.profilePhoto} className='rounded-full' />
        </div>
        <div className="profile_info flex flex-col items-center gap-4">
            <h1 className="text-3xl text-white">{user.name}</h1>
            <hr className='border-white border w-[15svw]' />
            <p className="text-lg text-white font-bold">Category  <span className='text-2xl bg-yellow-400 text-slate-700 ml-2 px-1 rounded-md py-0'>{user.category}</span></p>
        </div>
        <div className="profile_details flex flex-col items-start gap-4 basis-[100%] mt-4">
            <p className="text-lg text-yellow-500 self-start">Email:
                <span className="text-white font-semibold ml-2">
                    {user.email}
                </span>
            </p>
            <p className="text-lg text-yellow-500">Phone:
                <span className="text-white font-semibold ml-2">
                    {user.phone}
                </span>
            </p>
            <p className="text-lg text-yellow-500">Address:
                <span className="text-white ml-2">
                    {user.address}
                </span>
            </p>
        </div>
    </div>
    )
}
