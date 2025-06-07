import React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Inject,
} from "@syncfusion/ej2-react-schedule";

const Calendar = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">📅 Schedule Calendar</h2>
      <div className="rounded-xl overflow-hidden border border-purple-300 shadow-inner">
        <ScheduleComponent height="550px">
          <Inject services={[Day, Week, WorkWeek, Month]} />
        </ScheduleComponent>
      </div>
    </div>
  );
};

export default Calendar;
