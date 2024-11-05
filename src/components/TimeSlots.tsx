import React from 'react';
import { Clock } from 'lucide-react';

interface TimeSlotsProps {
  slots: string[];
  selectedSlot?: string;
  onSelectSlot: (slot: string) => void;
}

const TimeSlots = ({ slots, selectedSlot, onSelectSlot }: TimeSlotsProps) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {slots.map((slot) => (
        <button
          key={slot}
          className={`
            flex items-center justify-center p-2 rounded-lg border
            ${selectedSlot === slot
              ? 'bg-[#007BFF] text-white border-[#007BFF]'
              : 'border-gray-300 hover:border-[#007BFF] hover:text-[#007BFF]'
            }
            transition-colors
          `}
          onClick={() => onSelectSlot(slot)}
        >
          <Clock className="h-4 w-4 mr-2" />
          <span>{slot}</span>
        </button>
      ))}
    </div>
  );
};

export default TimeSlots;