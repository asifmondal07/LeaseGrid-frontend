import { X } from "lucide-react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

interface ModalProps {
     isOpen: boolean;
     onClose: () => void;
     children: React.ReactNode;
     title?: string;
     description?: string;
     button?:string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title, description }) => {
     if (!isOpen) return null;
     const handleCloseViewProfile = () => {
          onClose();
     };
     return (
          
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-700/50 ">
               <div className="relative bg-slate-50 rounded-lg w-250 rounded-xl ">
                    <div className="flex items-center justify-between p-2 absolute top-0 right-0 z-50">
                         {title && <h2 className="text-xl font-bold">{title}</h2>}
                         <Tooltip title="Close">
                              <IconButton onClick={handleCloseViewProfile}>
                                   <X className="text-gray-500 hover:text-gray-700 cursor-pointer w-5 h-5"/>
                              </IconButton>
                         </Tooltip>
                    </div>
                    {description && <p className="text-gray-600 mb-4">{description}</p>}
                    <div className="h-120 w-full" >
                         {children}
                    </div>
               </div>
          </div>
     );
};

export default Modal;