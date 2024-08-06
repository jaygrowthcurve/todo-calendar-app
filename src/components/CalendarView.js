import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarView = ({ tasks }) => {
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dayTasks = tasks.filter(
        (task) => new Date(task.startTime).toDateString() === date.toDateString()
      );
      return (
        <div>
          {dayTasks.map((task) => (
            <div key={task.id} style={{ backgroundColor: task.project.color }}>
              {task.title}
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <Calendar
      tileContent={tileContent}
    />
  );
};

export default CalendarView;
