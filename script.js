document.addEventListener('DOMContentLoaded', () => {
    // Thời gian biểu (từ 8h đến 21h, mỗi slot 1.5 tiếng hoặc 2 tiếng. 
    // Tuy nhiên theo đề bài có lớp cố định 17h30 - 19h. 
    // Ta sẽ chia theo các khung giờ phổ biến: Sáng, Chiều, Tối để dễ nhìn)
    
    const timeSlots = [
        "08:00 - 09:30",
        "09:30 - 11:00",
        "14:00 - 15:30",
        "15:30 - 17:00",
        "17:30 - 19:00",
        "19:30 - 21:00"
    ];

    const days = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

    // Lịch đã đặt (Thứ 2, Thứ 3, Thứ 7, CN lúc 17:30 - 19:00)
    // Index days: T2(0), T3(1), T4(2), T5(3), T6(4), T7(5), CN(6)
    const bookedSlots = [
        { time: "17:30 - 19:00", dayIndex: 0 }, // Thứ 2
        { time: "17:30 - 19:00", dayIndex: 1 }, // Thứ 3
        { time: "17:30 - 19:00", dayIndex: 5 }, // Thứ 7
        { time: "17:30 - 19:00", dayIndex: 6 }  // Chủ Nhật
    ];

    const scheduleBody = document.getElementById('schedule-body');

    timeSlots.forEach(time => {
        const tr = document.createElement('tr');
        
        // Cột thời gian
        const timeTd = document.createElement('td');
        timeTd.textContent = time;
        timeTd.className = 'time-col';
        tr.appendChild(timeTd);

        // Các cột ngày
        for (let i = 0; i < 7; i++) {
            const td = document.createElement('td');
            
            // Kiểm tra xem slot này đã được đặt chưa
            const isBooked = bookedSlots.some(b => b.time === time && b.dayIndex === i);

            if (isBooked) {
                td.textContent = 'Đã đặt';
                td.className = 'slot booked';
            } else {
                td.textContent = 'Trống';
                td.className = 'slot available';
            }

            tr.appendChild(td);
        }

        scheduleBody.appendChild(tr);
    });
});
