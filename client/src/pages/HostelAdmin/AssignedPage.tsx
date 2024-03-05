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

export default function AssignedPage({issues} : AssignedPageProps){
    const handleOnClick = (index: number) => {
        console.log(index);
    }
    return (
        <div className="flex flex-col text-white font-semibold h-[94svh] overflow-auto basis-[100%] p-2 gap-1">
            {issues.map((issue, index) => {
                return (
                    <>
                        {issue.assigned && <IssueCard key={index} name={issue.title} handleOnClick={handleOnClick} index={index} />}
                    </>
                )
            })}
        </div>
    )
}