import { create } from "zustand";

interface user{
    name: string;
    email: string;
    password: string;
    role: string;
}
interface notification{
    id: number;
    title: string;
    description: string;
    time: string;
    read: boolean;
}
interface AuthState {
    isAuthenticated: boolean;
    user:user|null;
    notification:notification[];
    login: () => void;  
    logout: () => void;
    SetUser:(user:user)=> void;  
    setNotification:(notification:notification[])=> void;
}

export const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    user:null,
    notification:[],
    login: () => set({ isAuthenticated: true }),
    logout: () => set({ isAuthenticated: false,user:null }),
    SetUser:(user:user)=> set({ user }),
    setNotification:(notification:notification[])=> set({ notification }),
}));    