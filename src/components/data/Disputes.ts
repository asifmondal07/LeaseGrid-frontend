import type{CardProps} from "../appShell/Cards";
import type{QueueViewDataProps} from "../appShell/disputes/QueueView";
import { Home, Clock, AlertTriangle, Flag, Ticket, MessageSquarePlus, CircleCheck, MessageSquareHeart, MessageSquareDiff } from "lucide-react";

export const disputeData:CardProps[] = [
      {
          title: "Open Disputes",
          value: 24,
          subtitle: "3 high risk cases",
          icon: MessageSquarePlus,
          badgeText: "critical",
     },
     {
          title: "Under Review",
          value: 18,
          subtitle: "Awaiting admin decision",
          icon: Clock,
          badgeText: "pending",
     },
     {
          title: "Resolved",
          value: 342,
          subtitle: "This month",
          icon: CircleCheck,
          badgeText: "+15%",
     },
     {
          title: "Avg Resolution Time",
          value: 3.2,
          subtitle: "Days",
          icon: MessageSquareDiff,
          badgeText: "2.4 days",
     },
     {
          title: "Success Rate",
          value: "87%",
          subtitle: "Positive outcomes",
          icon: MessageSquareHeart,
          badgeText: "+8.8%",
     },
]





export const disputeQueueData:QueueViewDataProps[] = [
     {
          status:"High Risk",
          disputeId:4725,
          issue:"Plumbing Issue Dispute",
          complainant:{
               name:"John Doe",
               avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
               role:{
                    name:"Tenant",
                    type:"Tenant"
               },
               mail:"[EMAIL_ADDRESS]",
               phone:1234567890,
               joinDate:"2022-01-01",
               rating:4.5,
               reviews:10,
               jobCompleted:5,
               message:{
                    subject:[
                         "I hired Robert to fix a major plumbing leak in my property. While he did respond quickly, the work was not completed to the standard we agreed upon. There's still a minor leak, and he's demanding full payment before fixing it. I've already paid 50% upfront as agreed.",
                         "I have photos showing the leak is in the exact same area you worked on. This is clearly related to the original job. I'm attaching before and after photos, plus a video of the current leak."
                    ],
                    file:["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"],
                    issue:{
                         reason:"Rent Dispute",
                         type:"Rent Dispute"
                    },
                    time:10,
                    date:"2022-01-01"
               }
          },
          respondent:{
               name:"Jane Doe",
               avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
               role:{
                    name:"Landlord",
                    type:"Landlord"
               },
               mail:"[EMAIL_ADDRESS]",
               phone:1234567890,
               joinDate:"2022-01-01",
               rating:4.5,
               reviews:10,
               jobCompleted:5,
               message:{
                    subject:[
                         "I completed the main work as per the contract. The 'minor leak' Mike mentions is actually a separate issue that wasn't part of the original scope. I'm willing to fix it, but it requires additional materials and labor. The contract clearly states payment upon completion of the agreed work, which I have done",
                         "I've reviewed the photos. The leak appears to be from a different pipe connection. However, I'm willing to come back and inspect it properly if Mike releases the remaining payment. I stand by my work and have documentation of everything I did."
                    ],
                    file:[
                         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                    ],
                    time:10,
                    date:"2022-01-01"
               }
          },
          date:"2026-03-11"
     }
]
