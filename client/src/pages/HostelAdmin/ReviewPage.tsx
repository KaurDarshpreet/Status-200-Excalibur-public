import { useEffect, useState } from "react";

type ReviewPageProps = {
    issues: Issue[];
    handleReview: (idx: number) => void;
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
};

type IssueCardProps = {
    name: string;
    index: number;
    handleOnClick: (index: number) => void;
};

const IssueCard = ({name, index, handleOnClick} : IssueCardProps) => {
    return (
        <div className={`py-2 px-4 relative cursor-pointer flex items-center border border-white rounded-md`} onClick={() => handleOnClick(index)}>
            <h1>{name}</h1>
        </div>
    );

}

export default function ReviewPage({issues, handleReview} : ReviewPageProps){
    const [notReviewed, setNotReviewed] = useState(issues.filter(issue => !issue.reviewed));
    useEffect(() => {
        setNotReviewed(issues.filter(issue => !issue.reviewed));
    }, [issues]);
    const [idx, setIdx] = useState(0);
    const handleOnClick = (index: number) => {
        setIdx(index);
    }
    return (
        <>
            {notReviewed.length == 0 && <div className="bg-slate-200 min-h-[94svh] min-w-[73svw] flex flex-col items-center justify-evenly rounded-lg font-bold text-5xl font-sans">ALL ISSUES REVIEWED 🎊</div>}
            <div className="flex flex-col text-white font-semibold h-[94svh] overflow-auto basis-[100%] p-2 gap-1">
                {issues.map((issue, index) => {
                    return (
                        <>
                            {!issue.reviewed && <IssueCard key={index} name={issue.title} handleOnClick={handleOnClick} index={index} />}
                        </>
                    )
                })}
            </div>
            {!issues[idx].reviewed && <div className="bg-slate-200 min-h-[94svh] min-w-[50svw] flex flex-col items-center justify-evenly rounded-lg gap-5">
                <h1 className="profile_name text-slate-600 font-bold text-2xl mt-2 min-h-max">{issues[idx].category} : {issues[idx].title}</h1>
                {issues[idx].media && (
                    <div className="min-w-[45svw] min-h-[50svh] bg-slate-400 rounded-lg p-1 flex items-center justify-center">
                        {issues[idx].media.endsWith(".jpg") || issues[idx].media.endsWith(".jpeg") ||
                            issues[idx].media.endsWith(".png") || issues[idx].media.endsWith(".gif") ? <img src={issues[idx].media} alt="Issue Media" className="w-full h-full object-cover" /> : <video src={issues[idx].media} controls className="w-full h-full object-cover" />}
                    </div>
                )}
                <p className="text-slate-600">{issues[idx].description}</p>
                <button onClick={() => handleReview(idx)} className="bg-green-500 text-white p-2 rounded-md font-semibold my-2 w-[95%]">Review</button>
            </div>}
        </>
    )
}