import { useState } from 'react'

export default function StudentProfile() {
    const [user, setUser] = useState({
        profilePhoto: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp',
        name: 'Debatreya Das', 
        rollNo: '12212070',
        email: '12212070@nitkkr.ac.in',
        hostel: 'H-10',
        roomNo: 'A457',
    })
    return (
        <div className="profile flex flex-col justify-center gap-2 items-center bg-black w-[20svw] mx-auto mt-5 rounded-lg shadow-slate-700 shadow-sm p-2 grow">
            <div className="profile_pic w-[100px] h-[100px] bg-slate-200 rounded-full mt-4">
                <img src={user.profilePhoto} className='rounded-full' />
            </div>
            <div className="profile_name text-red-300 font-bold text-2xl mt-2 text-center">{user.name}</div>
            <br />
            <div className="profile_email text-yellow-300 font-bold py-1 px-2 bg-blue-950 rounded-lg text-2xl">{user.rollNo}</div>
            <div className="profile_email text-white text-lg font-semibold my-1">{user.email}</div>
            <div className="profile_email text-white text-2xl font-bold mb-2 flex items-center gap-3">{user.hostel} <span className='text-2xl bg-yellow-400 text-slate-700 px-1 rounded-md py-0'>{user.roomNo}</span></div>
        </div>
    )
}