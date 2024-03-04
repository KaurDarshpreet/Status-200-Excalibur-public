import IssueForm from "./IssueForm"

const StudentDash = () => {
    return (
        <div className="container flex items-center gap-4 justify-center min-w-[100svw] min-h-[100svh] bg-slate-600">
            <div className="profile flex flex-col items-center bg-black min-w-[18svw] min-h-[94svh] rounded-md"></div>
            <div className="post_issue min-h-[94svh] min-w-[78svw] bg-blue-950 rounded-md flex justify-between items-center">
                <IssueForm />
            </div>
        </div>
    )
}
export default StudentDash