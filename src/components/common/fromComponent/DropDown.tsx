import React from 'react';

interface DropDownProps {
    label: string;
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
    if (!label || !onChange || !options) {
        throw new Error("DropDown component requires label, onChange, and options props");
    }

    return (
        <div>
            <select
                onChange={onChange}
                name={label}
                id={label}
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