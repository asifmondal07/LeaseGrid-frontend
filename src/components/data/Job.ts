import type { WidgetsCardProps } from "../appShell/WidgetsCard";
import { AlertTriangle,Calendar,Clock, } from "lucide-react";
import type { JobTableProps } from "../appShell/job/JobTable";

export const JobData:WidgetsCardProps[] =[
    {
        title:"Urgent Jobs",
        value:1.2,
        description:"15% faster than last month",
        icon:AlertTriangle,
    },
    {
        title:"Standard Jobs",
        value:4.5,
        description:"8% faster than last month",
        icon:Clock,
    },
    {
        title:"Scheduled Jobs",
        value:24,
        description:"Within target SLA",
        icon:Calendar,
    },
]



export const JobTableData:JobTableProps[] = [
    {
        avatar:"https://i.pravatar.cc/40",
        id:4582,
        name:"Michel Anderson",
        type:"Electrician",
        activeJobs:200,
        completedJobs:200,
        rating:4.5,
        status:"Available",
    },
    {
        avatar:"https://i.pravatar.cc/40",
        id:4815,
        name:"Michel Anderson",
        type:"Plumber",
        activeJobs:200,
        completedJobs:200,
        rating:4.3,
        status:"Unavailable",
    },
    {
        avatar:"https://i.pravatar.cc/40",
        id:4815,
        name:"Michel Anderson",
        type:"Painter",
        activeJobs:200,
        completedJobs:200,
        rating:4.2,
        status:"Available",
    },
    {
        avatar:"https://i.pravatar.cc/40",
        id:4815,
        name:"Michel Anderson",
        type:"HVAC",
        activeJobs:200,
        completedJobs:200,
        rating:4.1,
        status:"Available",
    },
    {
        avatar:"https://i.pravatar.cc/40",
        id:4815,
        name:"Michel Anderson",
        type:"Carpenter",
        activeJobs:200,
        completedJobs:200,
        rating:3.5,
        status:"Unavailable",
    },
]

