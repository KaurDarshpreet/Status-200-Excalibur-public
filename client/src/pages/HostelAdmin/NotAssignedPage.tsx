import { getTechnicians } from "@/api/hostelAdminQueries";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

type Issue = {
  issue_id: number
  title: string,
  description: string,
  is_public: boolean,
  is_resolved: boolean,
  issue_media: string,
  location: string,
  created_at: Date,
  category: string,

  technician: {
    technician_id: string,
    password: string,
    name: string,
    email: string,
    category: string,
    phone_number: string,
    address: string
  }
};

type ViewIssuesProps = {
  issues: Issue[];
};

type IssueCardProps = {
  name: string;
  index: number;
  handleOnClick: (index: number) => void;
};

const IssueCard = ({ name, index, handleOnClick }: IssueCardProps) => {
  return (
    <div className={`py-2 px-4 relative cursor-pointer  border:none mt-1 text-slate-700 font-semibold rounded bg-gradient-to-r from-[#00FFF5] to-[#00ADB5] text-lg  transition-all shadow-[0_0_1px_#00FFF5] hover:shadow-none text-center max-w-[400px]`} onClick={() => handleOnClick(index)}>
      <h1>{name}</h1>
    </div>
  );

}

export default function NotAssignedPage({ issues }: ViewIssuesProps) {
  if (issues == null || issues == undefined) {
    return (<p>No issues found</p>);
  }
  const [notAssigned, setNotAssigned] = useState<any>(issues.filter(issue => (issue.technician == null)));

  useEffect(() => {
    setNotAssigned(issues.filter(issue => (issue.technician == null)));
  }, [issues]);

  const technicianQuery = useQuery({
    queryKey: ["listTechnicians"],
    queryFn: getTechnicians
  });



  const [idx, setIdx] = useState(0);
  const handleOnClick = (index: number) => {
    setIdx(index);
  }

  const handleAssign = async (index: number)=>{
    const issue = issues[index];
    console.log(issue);
    if(!technicianQuery.isLoading){
      console.log(technicianQuery.data)
    }
  }


  return (
    <>
      {notAssigned.length == 0 && <div className="bg-[#222831] min-h-[94svh] min-w-[73svw] flex flex-col items-center  text-white justify-evenly rounded-lg font-bold text-5xl font-sans">ALL ISSUES ASSIGNED 🎊</div>}
      <div className="flex flex-col text-white font-semibold h-[94svh] overflow-auto basis-[100%] p-2 gap-1">
        {issues.map((issue, index) => {
          return (
            <div key={issue.issue_id}>
              {(issue.technician == null) && <IssueCard key={index} name={issue.title} handleOnClick={handleOnClick} index={index} />}
            </div>
          )
        })}
      </div>
      {(issues[idx].technician == null) && <div className="bg-[#222831] min-h-[94svh] min-w-[50svw] flex flex-col items-center justify-evenly rounded-lg gap-5">
        <h1 className="profile_name text-white font-bold text-2xl mt-2 min-h-max">{issues[idx].category} : {issues[idx].title}</h1>
        {issues[idx].issue_media && (
          <div className="min-w-[45svw] min-h-[50svh] bg-[#393E46] rounded-lg p-1 flex items-center justify-center">
            {issues[idx].issue_media.endsWith(".jpg") || issues[idx].issue_media.endsWith(".jpeg") ||
              issues[idx].issue_media.endsWith(".png") ? (
              <img src={issues[idx].issue_media} alt="Issue Media" className="max-w-[43svw] max-h-[47svh]" />
            ) : (
              <video src={issues[idx].issue_media} controls className="max-w-[43svw] max-h-[47svh]" />
            )}
          </div>
        )}
        <h3 className="text-left block text-white font-semibold  basis-[100%] p-2 h-max min-w-[45svw]">Location: {issues[idx].location}</h3>
        <p className="text-left block text-white font-semibold overflow-auto customScrollbar min-w-[45svw] p-2 min-h-max max-h-[20svh]">{issues[idx].description}</p>
        <div className="flex justify-between w-full items-center gap-4 mt-auto mb-8">
          <button
            onClick={() => setIdx((idx - 1 + issues.length) % issues.length)}
            className="bg-[#00FFF5] text-slate-700 px-2 py-1 mx-5 rounded-md font-bold"
          >
            Prev
          </button>
          <button onClick={() => {
            handleAssign(idx)
          }
          }
            className="bg-[#00FFF5] text-slate-700  px-2 py-1 basis-[30%] rounded-md font-bold bg-gradient-to-r from-[#00FFF5] to-[#00ADB5] transition-all shadow-[0_0_1px_#00FFF5] hover:shadow-none"
          >Assign</button>
          <button
            onClick={() => setIdx((idx + 1) % issues.length)}
            className="bg-[#00FFF5] text-slate-700 px-2 py-1 mx-5 rounded-md font-bold"
          >
            Next
          </button>

        </div>
      </div>}
    </>
  );
}