import { CircleCheck, Clock8, TicketCheck, TicketPlus, Tickets, TicketX } from "lucide-react";
import type {CardProps} from "../appShell/Cards";

export const SupportData:CardProps[] = [
     {  
          value: 456,
          icon: Tickets,
          badgeText: "Total ",
          subtitle:"All tickets"
     },
     {
          value: 100,
          icon: TicketPlus,
          badgeText: "New",
          subtitle:"Unassigned"
     },
     {
          value: 20,
          icon: TicketCheck,
          badgeText: "Active",
          subtitle:"In progress"
     },
     {
          value: 66,
          icon: Clock8,
          badgeText: "Waiting",
          subtitle:"On user"
     },
     {
          value: 89,
          icon: CircleCheck,
          badgeText: "Resolved",
          subtitle:"This week"
     },
     {
          value: 89,
          icon: TicketX,
          badgeText: "Cancelled",
          subtitle:"This week"
     }
];