import { useEffect, useState } from "react";
import { header, subject, subSubject, subSubSubject } from "../../common/style";
import { AlertCircle, Calendar, Folder, MessageSquare } from "lucide-react";
import { UserAvatar } from "../../common/UserAvtar";
import { GetDays } from "../../common/GetDays";



export interface QueueViewDataProps {
    status: string;
    disputeId: number;
    issue: string;
    complainant: {
        name: string;
        avatar: string;
        role: {
            name: string;
            type?: string;
        };
        mail: string;
        phone: number;
        joinDate: string;
        rating: number;
        reviews?: number;
        jobCompleted?: number;
        message: {
            subject: string[];
            file?: string[];
            issue: {
                reason: string;
                type: string;
            };
            time?: number;
            date?: string;
        };
    }
    respondent: {
        name: string;
        avatar: string;
        role: {
            name: string;
            type?: string;
        };
        mail: string;
        phone: number;
        joinDate: string;
        rating: number;
        reviews?: number;
        jobCompleted?: number;
        message: {
            subject: string[];
            file?: string[];
            time?: number;
            date?: string;
        };
    }
    date:string;

}

interface QueueViewProps {
    data: QueueViewDataProps[];
}

export const QueueView: React.FC<QueueViewProps> = ({ data }) => {
    const [totalOpen, setTotalOpen] = useState(0);
    const [totalMsg, setTotalMsg] = useState(0);
    const [totalFiles, setTotalFiles] = useState(0);

    useEffect(() => {
        const total = data.filter((itm) => itm.disputeId).length;
        const totalMessages = data.reduce(
            (acc, dispute) => acc + dispute.complainant.message.subject.length + dispute.respondent.message.subject.length,
            0
        );

        const totalFiles = data.reduce(
            (acc, dispute) => acc + (dispute.complainant.message.file?.length || 0) + (dispute.respondent.message.file?.length || 0),
            0
        );
        setTotalOpen(total)
        setTotalMsg(totalMessages)
        setTotalFiles(totalFiles)
    }, [data])

    return (
        <div className=" px-4 py-2 rounded-2xl bg-white w-70 h-200">
            <div className="flex flex-row my-4 justify-between">
                <p className={`${header}`}>Dispute Queue</p>
                <p className="px-3 py-2 bg-red-50 text-red-600 rounded-full text-xs font-semibold">{totalOpen} open</p>
            </div>
            <div className="flex flex-col gap-4 overflow-y-auto scrollbar-hide h-100">
                {data.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="bg-red-50 border-red-200 border-2 rounded-2xl px-3 py-3 cursor-pointer hover:shadow-md"
                        >
                            <div className="flex felx-row  justify-between items-center">
                                <p className="px-3 py-2 bg-red-100 text-red-600 rounded-full text-xs font-semibold">{item.status}</p>
                                <AlertCircle className="w-4 h-4 text-red-600" />
                            </div>
                            <div className="px-1 py-2">
                                <p className={`${subject}`}>job #{item.disputeId}</p>
                                <p className={`${subSubSubject} whitespace-nowrap`}>{item.issue}</p>

                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row items-center gap-2 w-full">
                                    <UserAvatar img={`${item.complainant.avatar}`} className="w-7 h-7 border border-slate-300 " />
                                    <p className={`${subSubSubject}`}>VS</p>
                                    <UserAvatar img={`${item.respondent.avatar}`} className="w-7 h-7 border border-slate-300  " />
                                </div>
                                <div className="w-full">
                                </div>
                            </div>
                            <div className="flex flex-row justify-between py-4">
                                <div className="flex flex-row items-center gap-1">
                                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                                    <p className={`${subSubSubject}`}>{GetDays(item.date)}</p>
                                </div>
                                <div className="flex flex-row items-center gap-1">
                                    <Folder className="w-3.5 h-3.5 text-slate-500" />
                                    <p className={`${subSubSubject}`}>{totalFiles}</p>
                                </div>
                                <div className="flex flex-row items-center gap-1">
                                    <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
                                    <p className={`${subSubSubject}`}>{totalMsg}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}