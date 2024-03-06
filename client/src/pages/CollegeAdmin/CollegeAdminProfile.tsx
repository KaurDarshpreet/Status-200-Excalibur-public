import { useState } from "react"


const CollegeAdminProfile = () => {
    const [collegeDetails, setcollegeDetails] = useState({
        profilePhoto: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp',
        collegeName: 'National Institute of Technology Kurukshetra',
        email: 'h10@nitkkr.ac.in',
        phone: '1234567890'
    })
    return (
        <div className="profile flex mt-2 flex-col items-center gap-2 bg-[#393E46] min-w-[20svw] h-max mb-auto  rounded-lg p-4">
            <div className="profile_pic w-[150px] h-[150px] rounded-full bg-slate-700 flex items-center justify-center">
                <img src={collegeDetails.profilePhoto} className='rounded-full' />
            </div>
            <div className="profile_info flex flex-col items-center gap-4">
                <h1 className="text-3xl text-white text-center font-semibold">{collegeDetails.collegeName}</h1>
                <hr className='border-white border w-[15svw]' />
            </div>
            <div className="profile_details flex flex-col items-start gap-2 basis-[100%] mt-4">
                <p className="text-lg text-white self-start">Email:
                    <span className="text-white font-semibold ml-2">
                        {collegeDetails.email}
                    </span>
                </p>
                <p className="text-lg text-white">Phone:
                    <span className="text-white font-semibold ml-2">
                        {collegeDetails.phone}
                    </span>
                </p>
            </div>
        </div>
    )
}
export default CollegeAdminProfile