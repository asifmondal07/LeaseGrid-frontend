import { header, subSubject } from "../../common/style";
import type { TicketProps } from "./ListView";
import { Dot, TicketPlus, Clock, PauseCircle, CheckCircle2, MoreHorizontal } from "lucide-react";
import { UserAvatar } from "../../common/UserAvtar";

export interface ListViewProps {
    data: TicketProps[];
}

export const GridView: React.FC<ListViewProps> = ({ data }) => {
    const getPriorityColor = (priority?: string) => {
        switch (priority) {
            case "Critical":
                return "text-red-700 bg-red-100";
            case "High":
                return "text-orange-700 bg-orange-100";
            case "Medium":
                return "text-yellow-700 bg-yellow-100";
            case "Low":
                return "text-teal-700 bg-teal-100";
            case "Resolved":
                return "text-green-700 bg-green-100";
            default:
                return "text-gray-700 bg-gray-100";
        }
    }

    const getStatus=(status:string)=>{
        switch(status){
            case "New":
                return "text-orange-600 bg-orange-100"
            case "In Progress":
                return "text-blue-600 bg-blue-100"
            case "Waiting":
                return "text-yellow-600 bg-yellow-100"
            case "Resolved":
                return "text-green-600 bg-green-100"
            default:
                return "text-gray-600 bg-gray-100";
        }
    }

    const row=("flex flex-row justify-between items-center");

    const columns = [
        { id: "New", label: "New", dotColor: "text-orange-500", iconColor: "text-orange-500", iconBg: "bg-orange-100", Icon: TicketPlus },
        { id: "In Progress", label: "In Progress", dotColor: "text-blue-500", iconColor: "text-blue-500", iconBg: "bg-blue-100", Icon: Clock },
        { id: "Waiting", label: "Waiting", dotColor: "text-yellow-500", iconColor: "text-yellow-500", iconBg: "bg-yellow-100", Icon: PauseCircle },
        { id: "Resolved", label: "Resolved", dotColor: "text-green-500", iconColor: "text-green-500", iconBg: "bg-green-100", Icon: CheckCircle2 },
    ];

    const getColumnTotal = (status: string) => data.filter(item => item.ticket.status === status).length;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full ">
            {columns.map((col) => {
                const columnTickets = data.filter((item) => item.ticket.status === col.id);
                
                return (
                    <div key={col.id} 
                        className="flex flex-col gap-4 bg-white rounded-2xl py-5 px-4 h-[70vh] "
                    >
                        {/* Column Header */}
                        <div  className={row}>
                            <div className="flex flex-row items-center">
                                <Dot className={`w-8 h-8 ${col.dotColor} -ml-2`} />
                                <h1 className={`${header} text-slate-800`}>{col.label}</h1>
                                <p className={`ml-3 px-2 py-0.5 rounded-full font-medium text-xs ${getStatus(col.id)}`}>
                                    {getColumnTotal(col.id)}
                                </p>
                            </div>
                            <div className={`p-2 ${col.iconBg} rounded-full`}>
                                <col.Icon className={`w-4 h-4 ${col.iconColor}`} />
                            </div>
                        </div>

                        {/* Tickets List */}
                        <div className="flex flex-col gap-4 overflow-y-auto scrollbar-hide">
                            {columnTickets.map((item) => {
                                const ticket = item.ticket;
                                return (
                                    <div key={ticket.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 hover:shadow-md transition-shadow">
                                        <div className={`${row} mb-3`}>
                                            <p className={`px-2.5 py-1 rounded-full font-semibold text-[10px] uppercase tracking-wider ${getPriorityColor(ticket.priority)}`}>
                                                {ticket.priority}
                                            </p>
                                            <p className="text-xs font-semibold text-slate-700">#TKT-{ticket.id}</p>
                                        </div>
                                        
                                        <div className="flex flex-col gap-1 mb-4">
                                            <p className="font-semibold text-slate-800 text-sm line-clamp-1">{ticket.subject}</p>
                                            <p className={`${subSubject} text-xs line-clamp-2`}>{ticket.subSubject}</p>
                                        </div>

                                        <div className=" py-4">
                                            <div className={row}>
                                                <div className={`${row} gap-2`}>
                                                    <UserAvatar img={item.ticketRequestor?.avatar} className="w-7 h-7" />
                                                    <p className={`${subSubject}`}>{item.ticketRequestor?.name}</p>
                                                </div>
                                                <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md">
                                                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                                                    <p className="text-[11px] font-semibold text-slate-600">{ticket.CreatedOn} ago</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`${row} pt-3 border-t border-slate-100`}>
                                            <div className="flex -space-x-2">
                                                {item.ticketAssignee ? (
                                                    <div title={`Assignee: ${item.ticketAssignee.name}`}>
                                                        <UserAvatar img={item.ticketAssignee.avatar} className="w-7 h-7 border-2 border-white rounded-full bg-slate-200" />
                                                    </div>
                                                ) : (
                                                    null
                                                )}
                                            </div>
                                            <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md">
                                                <Clock className="w-3.5 h-3.5 text-slate-400" />
                                                <p className="text-[11px] font-semibold text-slate-600">{ticket.sla}h</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};