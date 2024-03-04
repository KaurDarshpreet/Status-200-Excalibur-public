import TechnicianProfile from './TechnicianProfile'
import ViewIssues from './ViewIssues'

const issues = [
    {
        id: 1,
        title: 'Issue 1',
        description: 'Description 1',
        status: 'pending',
        date: '2022-12-12',
        media: 'image.jpg',
        location: 'New York'
    },
    {
        id: 2,
        title: 'Issue 2',
        description: 'Description 2',
        status: 'pending',
        date: '2022-12-12',
        media: 'video.mp4',
        location: 'Los Angeles'
    },
    {
        id: 3,
        title: 'Issue 3',
        description: 'Description 3',
        status: 'pending',
        date: '2022-12-12',
        media: 'image.jpg',
        location: 'Chicago'
    },
    {
        id: 4,
        title: 'Issue 4',
        description: 'Description 4',
        status: 'pending',
        date: '2022-12-12',
        media: 'image.jpg',
        location: 'Houston'
    },
    {
        id: 5,
        title: 'Issue 5',
        description: 'Description 5',
        status: 'pending',
        date: '2022-12-12',
        media: 'image.jpg',
        location: 'Miami'
    }
]

const TechnicianDash = () => {
    return (
        <div className="container flex items-center gap-4 justify-center min-w-[100svw] min-h-[100svh] bg-slate-600">
            <div className="profile flex flex-col items-center gap-[8rem] bg-slate-900 min-w-[23svw] min-h-[94svh] rounded-md">
                <TechnicianProfile />
                <button className="btn bg-blue-600 cursor-pointer text-white font-bold py-2 px-4 mt-auto mb-5 rounded-md">On Leave</button>
            </div>
            <div className="post_issue min-h-[94svh] min-w-[73svw] bg-blue-950 rounded-md flex justify-between items-center">
                <ViewIssues issues={issues} />
            </div>
        </div>
    )
}
export default TechnicianDash