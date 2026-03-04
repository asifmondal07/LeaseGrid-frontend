export interface Notification {
    id: number;
    title: string;
    description: string;
    time: string;
    read: boolean;
}


export const notificationData: Notification[] = [
    {
        id: 1,
        title: "New Job Request",
        description: "You have a new job request from a client.",
        time: "6 hours ago",
        read: false,
    },
    {
        id: 2,
        title: "Job Request Approved",
        description: "Your job request has been approved by the client.",
        time: "2 hours ago",
        read: false,
    },
    {
        id: 3,
        title: "Job Request Rejected",
        description: "Your job request has been rejected by the client.",
        time: "10 hours ago",
        read: false,
    },
    {
        id: 4,
        title: "Lanloard Create a Property",
        description: "Lanloard Create a Property",
        time: "5 hours ago",
        read: true,
    }
];