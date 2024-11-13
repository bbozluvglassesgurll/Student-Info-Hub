document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('add-time-slot').addEventListener('click', function() {
        const scheduleList = document.getElementById('schedule-list');
        
        const timeSlotDiv = document.createElement('div');
        timeSlotDiv.classList.add('time-slot');
        
        const timeLabel = document.createElement('label');
        timeLabel.textContent = 'เวลา';
        
        const timeInput = document.createElement('input');
        timeInput.type = 'time';
        
        const eventLabel = document.createElement('label');
        eventLabel.textContent = 'กิจกรรม';
        
        const eventInput = document.createElement('input');
        eventInput.type = 'text';
        eventInput.placeholder = 'เพิ่มกิจกรรม';
        
        timeSlotDiv.appendChild(timeLabel);
        timeSlotDiv.appendChild(timeInput);
        timeSlotDiv.appendChild(eventLabel);
        timeSlotDiv.appendChild(eventInput);
        
        scheduleList.appendChild(timeSlotDiv);
    });

    document.getElementById('save-schedule').addEventListener('click', function() {
        const schedule = {};
        const timeSlots = document.querySelectorAll('.time-slot');
        
        timeSlots.forEach(function(slot, index) {
            const time = slot.querySelector('input[type="time"]').value;
            const event = slot.querySelector('input[type="text"]').value;
            if (time && event) {
                schedule[`Time Slot ${index + 1}`] = { time, event };
            }
        });

        console.log(schedule);
        localStorage.setItem('schedule', JSON.stringify(schedule));
        alert('ตารางกิจกรรมถูกบันทึกแล้ว!');
    });

    const savedSchedule = JSON.parse(localStorage.getItem('schedule'));
    if (savedSchedule) {
        const scheduleList = document.getElementById('schedule-list');
        Object.keys(savedSchedule).forEach(function(key) {
            const slot = savedSchedule[key];
            const timeSlotDiv = document.createElement('div');
            timeSlotDiv.classList.add('time-slot');
            
            const timeLabel = document.createElement('label');
            timeLabel.textContent = 'เวลา';
            const timeInput = document.createElement('input');
            timeInput.type = 'time';
            timeInput.value = slot.time;
            
            const eventLabel = document.createElement('label');
            eventLabel.textContent = 'กิจกรรม';
            const eventInput = document.createElement('input');
            eventInput.type = 'text';
            eventInput.value = slot.event;
            
            timeSlotDiv.appendChild(timeLabel);
            timeSlotDiv.appendChild(timeInput);
            timeSlotDiv.appendChild(eventLabel);
            timeSlotDiv.appendChild(eventInput);
            
            scheduleList.appendChild(timeSlotDiv);
        });
    }
});
