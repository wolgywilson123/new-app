import React from 'react';

export const CalendarHeader = ({ onNext, onBack, dateDisplay }) => {
  return(
    <div id="header">
        <i class="fas fa-angle-left" onClick={onBack} id="backButton"></i>
        <div id="monthDisplay">{dateDisplay}</div>
        <i class="fas fa-angle-right" onClick={onNext} id="nextButton"></i>
      </div>
  );
};
