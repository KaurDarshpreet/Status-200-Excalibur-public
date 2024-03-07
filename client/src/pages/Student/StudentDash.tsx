import { useState } from "react";
import IssueForm from "./IssueForm"
import StudentProfile from './StudentProfile'
import ViewIssues from './ViewIssues'
import { GiHamburgerMenu } from "react-icons/gi";

interface ButtonProps {
    name: string;
    handleOnClick: () => void;
}

const issues = [
    {
        title: "Issue 1",
        description: "Issue 1 description",
        media: "https://randommedia.com/wp-content/uploads/2023/03/GWLH-Key-Art-548W-x-800H-H.jpg",
        category: "Issue 1 category",
        visibility: "Issue 1 visibility",
        assigned: true,
        location: "Issue 1 location"
    },
    {
        title: "Issue 2",
        description: "Issue 2 description",
        media: "Issue 2 media.mp4",
        category: "Issue 2 category",
        visibility: "Issue 2 visibility",
        assigned: false,
        location: "Issue 2 location"
    },
    {
        title: "Issue 3",
        description: "Issue 3 description",
        media: "Issue 3 media.jpg",
        category: "Issue 3 category",
        visibility: "Issue 3 visibility",
        assigned: false,
        location: "Issue 3 location"
    },
    {
        title: "Issue 4",
        description: "Issue 4 description",
        media: "Issue 4 media.mp4",
        category: "Issue 4 category",
        visibility: "Issue 4 visibility",
        assigned: true,
        location: "Issue 4 location"
    },
    {
        title: "Issue 5",
        description: "Issue 5 description",
        media: "Issue 5 media.jpg",
        category: "Issue 5 category",
        visibility: "Issue 5 visibility",
        assigned: true,
        location: "Issue 5 location"
    },
];

const Button = ({ name, handleOnClick }: ButtonProps) => {
    return (
        <button onClick={handleOnClick} className="bg-[#00FFF5] text-slate-700 font-semibold rounded p-2 text-lg  transition-all shadow-[0_0_10px_#00FFF5] hover:shadow-none">{name}</button>
    )
}

const StudentDash = () => {
    const [toggle, setToggle] = useState(true)
    function handleToggle() {
        setToggle(!toggle)
    }
    const visible = "max-sm:absolute max-sm:top-0 max-sm:left-0 max-sm:min-w-[100svw] max-sm:min-h-[100svh] max-sm:z-50 customSlideLeft"
    const hidden = "max-sm:hidden"
    const [viewIssues, setViewIssues] = useState(false)
    return (
        <div className={`container flex items-center gap-4 justify-center min-w-[100svw] min-h-[100svh] bg-[#000] relative ${toggle ? 'max-h-[100svh] overflow-hidden' : ''}`}>
            <GiHamburgerMenu className="text-[#ffffff] text-4xl cursor-pointer self-start fixed top-2 left-2 sm:hidden" onClick={handleToggle} />
            <div className={`profile flex flex-col items-center gap-[8rem] bg-[#222831] min-w-[23svw] min-h-[94svh] rounded-md ${toggle ? visible : hidden}`}>
                <GiHamburgerMenu className="text-[#ffffff] text-4xl cursor-pointer self-start absolute top-2 left-2 sm:hidden" onClick={handleToggle} />
                <StudentProfile />
                <div className="flex flex-col items-center gap-4 mb-10 mt-auto">
                    {viewIssues ? 
                        <Button 
                            name="Report Issue" 
                            handleOnClick={() => { 
                                setViewIssues(false) 
                                setToggle(!toggle) 
                            }} /> 
                        : 
                        <Button 
                            name="View Issues" 
                            handleOnClick={() => {
                                setViewIssues(true)
                                setToggle(!toggle)
                        }} />
                    }
                </div>
            </div>
            <div className="post_issue min-h-[94svh] min-w-[73svw] bg-[#222831] rounded-md flex max-sm:flex-col justify-between max-sm:justify-evenly items-center max-sm:max-w-[100svw] overflow-hidden">
                {viewIssues ? <ViewIssues issues={issues} /> : <IssueForm />}
            </div>
        </div>
    )
}
export default StudentDash 