import React from 'react';
import { subHeader } from '../style';

interface DropDownProps {
    label?: string;
    className?: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    children?: React.ReactNode;
    options: string[];
}

export const DropDown: React.FC<DropDownProps> = ({
    label,
    onChange,
    className = "",
    options = [],
}) => {
    if (!onChange || !options) {
        throw new Error("DropDown component requires onChange, and options props");
    }

    return (
        <div>
            {label && <label className={`block ${subHeader} pb-2 px-1`}>{label}</label>}
            <select
                onChange={onChange}
                className={`cursor-pointer border border-slate-200 text-slate-600 text-sm focus:outline-none 
                focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all 
                placeholder:text-slate-400 ${className}`}
            >
                {options.map((option) => (
                    <option key={option} value={option} className="bg-slate-100 rounded-2xl">
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};