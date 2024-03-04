document.addEventListener("DOMContentLoaded", function() {

    setTimeout(function() {
        document.getElementById('opening-layer').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('opening-layer').style.display = 'none';
            document.getElementById('modal-window').style.display = 'flex';
        }, 3000);
    }, 1000);

    document.getElementById('close-modal-button').addEventListener('click', function() {
        document.getElementById('modal-window').style.display = 'none';
    });
});


document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      document.getElementById('opening-layer').style.opacity = '0';
      setTimeout(function() {
          document.getElementById('opening-layer').style.display = 'none';
      }, 3000);
  }, 1000);
});

const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach(slide => {
      slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
  }

  function nextSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function startSlider() {
    showSlide(currentSlide);
    setInterval(nextSlide, 5000);
  }

  startSlider();

  document.addEventListener('DOMContentLoaded', function() {
    const calendarBody = document.getElementById('calendar-body');
    const openingHoursDiv = document.getElementById('opening-hours');
  
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    const openingHoursMap = {
      1: '営業時間：16:20 - 24:00',
      2: '営業時間：10:00 - 24:00',
      3: '営業時間：10:00 - 24:00',
      4: '営業時間：15:20 - 24:00',
      5: '営業時間：16:20 - 24:00',
      6: '営業時間：16:20 - 24:00',
      7: '営業時間：10:00 - 24:00',
      8: '営業時間：16:20 - 24:00',
      9: '営業時間：10:00 - 24:00',
      10: '営業時間：10:00 - 24:00',
      11: '営業時間：10:00 - 24:00',
      12: '営業時間：16:20 - 24:00',
      13: '営業時間：16:20 - 24:00',
      14: '営業時間：16:20 - 24:00',
      15: '営業時間：16:20 - 24:00',
      16: '営業時間：10:00 - 24:00',
      17: '営業時間：10:00 - 24:00',
      18: '営業時間：10:00 - 24:00',
      19: '営業時間：10:00 - 24:00',
      20: '営業時間：10:00 - 24:00',
      21: '営業時間：10:00 - 24:00',
      22: '営業時間：10:00 - 24:00',
      23: '営業時間：10:00 - 24:00',
      24: '営業時間：10:00 - 24:00',
      25: '営業時間：10:00 - 24:00',
      26: '営業時間：10:00 - 24:00',
      27: '営業時間：10:00 - 24:00',
      28: '営業時間：10:00 - 24:00',
      29: '営業時間：10:00 - 24:00',
      30: '営業時間：10:00 - 24:00',
      31: '営業時間：10:00 - 24:00',
    };
  
    function generateCalendar(year, month) {
      const startDate = new Date(year, month, 1);
      const endDate = new Date(year, month + 1, 0);
      const daysInMonth = endDate.getDate();
      const startDay = startDate.getDay();
  
      let date = 1;
      let calendarHTML = '';
  
      for (let i = 0; i < 6; i++) {
        let row = '<tr>';
        for (let j = 0; j < 7; j++) {
          if (i === 0 && j < startDay) {
            row += '<td></td>';
          } else if (date > daysInMonth) {
            break;
          } else {
            const openingHours = openingHoursMap[date] || '営業時間：休業';
            row += `<td data-opening-hours="${openingHours}">${date}</td>`;
            date++;
          }
        }
        row += '</tr>';
        calendarHTML += row;
      }
  
      calendarBody.innerHTML = calendarHTML;
    }
  
    calendarBody.addEventListener('click', function(event) {
      const cell = event.target;
      if (cell.tagName === 'TD' && cell.innerHTML !== '') {
        openingHoursDiv.textContent = cell.getAttribute('data-opening-hours');
      }
    });
  
    generateCalendar(currentYear, currentMonth);
  });
