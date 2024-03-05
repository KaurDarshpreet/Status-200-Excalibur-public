import { useState } from "react";
import TechnicianCard from "../Technician/TechnicianProfile";

type AssignedPageProps = {
    issues: Issue[];
}
type Issue = {
    title: string;
    description: string;
    media: string;
    category: string;
    visibility: string;
    assigned: boolean;
    complete: boolean;
    reviewed: boolean;
    location: string;
    technician: {
        name: string;
        email: string;
        category: string;
        phone: string;
        address: string;
        profilePhoto: string;
    }
};

type IssueCardProps = {
    name: string;
    index: number;
    technician: string;
    category: string;
    handleOnClick: (index: number) => void;
};

const IssueCard = ({name,technician, category , index, handleOnClick} : IssueCardProps) => {
    return (
        <div className={`py-2 px-2 relative cursor-pointer flex gap-2  bg-slate-900 items-center border border-white rounded-md justify-between`} onClick={() => handleOnClick(index)}>
            <span className="bg-gray-600 text-ellipsis overflow-hidden whitespace-nowrap px-2 rounded-md mr-auto">{name}</span>
            <span className="bg-gray-600 min-w-max px-2 rounded-md">{category}</span>
            <h1 className="bg-gray-600 min-w-max px-2 rounded-md">{technician}</h1>
            
        </div>
    );

}

export default function AssignedPage({issues} : AssignedPageProps){
    const [Assigned, setAssigned] = useState(issues.filter(issue => issue.assigned));
    const [idx, setIdx] = useState(0);
    const handleOnClick = (index: number) => {
        setIdx(index);
        console.log(index);
    }
    return (
        <>
            {Assigned.length == 0 && <div className="bg-slate-200 min-h-[94svh] min-w-[73svw] flex flex-col items-center justify-evenly rounded-lg font-bold text-5xl font-sans">Haven't Assigned any Issues yet 😔</div>}
            <div className="flex flex-col text-white font-semibold h-[94svh] overflow-auto basis-[100%] p-2 gap-1">
                {issues.map((issue, index) => {
                    return (
                        <>
                            {issue.assigned && <IssueCard key={index} name={issue.title} technician={issue.technician.name} category = {issue.category} handleOnClick={handleOnClick} index={index} />}
                        </>
                    )
                })}
            </div>
            {issues[idx].assigned && <div className="bg-slate-200 min-h-[94svh] w-max flex flex-col items-center justify-center rounded-lg gap-5 p-[10%]">
                <TechnicianCard user={issues[idx].technician} />
            </div>
            }
        </>
    )
}