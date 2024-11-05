import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarProps {
  onDateSelect?: (date: Date) => void;
  selectedDate?: Date;
  availableSlots?: string[];
  isSmall?: boolean;
}

const Calendar = ({ onDateSelect, selectedDate = new Date(), availableSlots = [], isSmall = false }: CalendarProps) => {
  const [currentDate, setCurrentDate] = React.useState(selectedDate);
  const [currentMonth, setCurrentMonth] = React.useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = React.useState(currentDate.getFullYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const weeks = [];
  let week = Array(7).fill(null);

  // Fill in the days
  days.forEach((day, index) => {
    const dayIndex = (firstDayOfMonth + index) % 7;
    if (dayIndex === 0 && index !== 0) {
      weeks.push([...week]);
      week = Array(7).fill(null);
    }
    week[dayIndex] = day;
  });
  if (week.some(day => day !== null)) {
    weeks.push(week);
  }

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const isToday = (day: number) => {
    const today = new Date();
    return day === today.getDate() && 
           currentMonth === today.getMonth() && 
           currentYear === today.getFullYear();
  };

  const isSelected = (day: number) => {
    return day === selectedDate.getDate() && 
           currentMonth === selectedDate.getMonth() && 
           currentYear === selectedDate.getFullYear();
  };

  const hasAvailableSlot = (day: number) => {
    const dateString = new Date(currentYear, currentMonth, day).toISOString().split('T')[0];
    return availableSlots.includes(dateString);
  };

  return (
    <div className={`bg-white rounded-lg shadow ${isSmall ? 'p-2' : 'p-4'}`}>
      <div className="flex items-center justify-between mb-4">
        <button onClick={handlePrevMonth} className="p-1 hover:bg-gray-100 rounded">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h2 className={`font-semibold ${isSmall ? 'text-sm' : 'text-lg'}`}>
          {new Date(currentYear, currentMonth).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
        </h2>
        <button onClick={handleNextMonth} className="p-1 hover:bg-gray-100 rounded">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map(day => (
          <div key={day} className={`text-center font-medium text-gray-500 ${isSmall ? 'text-xs' : 'text-sm'}`}>
            {isSmall ? day[0] : day}
          </div>
        ))}

        {weeks.map((week, weekIndex) => (
          week.map((day, dayIndex) => (
            <div
              key={`${weekIndex}-${dayIndex}`}
              className={`
                ${isSmall ? 'h-6' : 'h-10'} 
                flex items-center justify-center relative
                ${day ? 'cursor-pointer hover:bg-gray-50' : ''}
                ${isToday(day) ? 'bg-blue-50' : ''}
                ${isSelected(day) ? 'bg-[#007BFF] text-white hover:bg-[#0056B3]' : ''}
                rounded-full
              `}
              onClick={() => day && onDateSelect?.(new Date(currentYear, currentMonth, day))}
            >
              {day && (
                <>
                  <span className={isSmall ? 'text-xs' : 'text-sm'}>
                    {day}
                  </span>
                  {hasAvailableSlot(day) && !isSelected(day) && (
                    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#007BFF] rounded-full" />
                  )}
                </>
              )}
            </div>
          ))
        ))}
      </div>
    </div>
  );
};

export default Calendar;