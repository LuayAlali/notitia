const alertBanner = document.getElementById("alert");
alertBanner.innerHTML = `<div class="alert-banner"><p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p><p class="alert-banner-close">x</p></div>`;
alertBanner.addEventListener('click', e =>{
    const element = e.target;
    if(element.className === 'alert-banner-close'){
        alertBanner.style.display = 'none';
    }
});  

// line Graph
let trafficCanvas = document.getElementById('traffic-chart');

//traffic options
let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
    duration: 2000
    },
scales: {
    yAxes : [{
        ticks: {
            beginAtZero: true
        }
    }]
},
legend: {
    display: false
},

    events: ['click']

};


//Weekly Data
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets:[{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
            2500],
            backgroundColor: 'rgba(255, 217, 114, .6)',
            borderWidth: 1
    }]

};
//Hourly Data
let trafficData2 = {
    labels: ["0","1-3", "4-6", "7-9", "10-13", "14-17", "18-21", "22-24"],
    datasets:[{
        data: [50, 120, 70, 300, 425, 630, 2040, 700],
            backgroundColor: 'rgba(255, 217, 114, .6)',
            borderWidth: 1
}]
};
//Daily Data
let trafficData3 = {
    labels: ["M","T", "W", "Th", "F", "S", "Su"],
    datasets:[{
        data: [260, 320, 120, 600, 425, 1200, 2300],
            backgroundColor: 'rgba(255, 217, 114, .6)',
            borderWidth: 1
}]
};

//Monthly Data
let trafficData5 = {
    labels: ["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sept", "Oct", "Nov", "Dec"],
    datasets:[{
        data: [3000, 3500, 4200, 4800, 5100, 5600, 5700, 6200, 6500, 6800, 7200, 7300],
            backgroundColor: 'rgba(255, 217, 114, .6)',
            borderWidth: 1
}]
};

// Default chart 'Weekly'
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
    });
    
   
//    Hourly Event //
    const trafficHourly = document.querySelector('.traffic-data2');
    
    trafficHourly.addEventListener('click', () => {
  
 trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData2,
    options: trafficOptions
    });
    
});

// Daily Event//
const trafficDaily= document.querySelector('.traffic-data3');
    
trafficDaily.addEventListener('click', () => {

trafficChart = new Chart(trafficCanvas, {
type: 'line',
data: trafficData3,
options: trafficOptions
});

});

// Weekly Event //
const trafficWeekly = document.querySelector('.traffic-data');

trafficWeekly.addEventListener('click', () => {

    trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
    });
    
    });

    //Monthly Event //

const trafficMonthly = document.querySelector('.traffic-data5');

trafficMonthly.addEventListener('click', () => {

    trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData5,
    options: trafficOptions
    });
    
    });



    
//BAR GRAPH
const dailyData = {
    labels: ['S','M','T','W','T','F','S'],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7298ff',
        borderWidth: 1
    }]

};

const dailyOptions = {
    aspectRatio: 2.5,
    animation: {
    duration: 0
    
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};

 const dailyCanvas = document.getElementById('daily-chart');
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});



//Pie 
const mobileCanvas = document.getElementById('mobile-users');

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 1,
    hoverBackgroundColor: [
        'rgba(255, 147, 114, 1)',
        'rgba(222,199,255,1)',
        '#6aa5af'
    ],
    backgroundColor: [
    'rgba(255, 147, 114, .6)',
    'rgba(222,199,255,.6)',
    '#51B6C8'
    ],
    }]
};

const mobileOptions = {
    aspectRatio: 2.5,
    animation: {
    duration: 1500
    },
    legend: {
    position: 'right',
    labels: {
    boxWidth: 20,
    fontStyle: 'bold'
    }
    },
    
    };

    let mobileChart = new Chart(mobileCanvas, {
        type: 'doughnut',
        data: mobileData,
        options: mobileOptions
        });

        const user = document.getElementById('userField');
        const message = document.getElementById('messageField')
        const send = document.getElementById('send');

        send.addEventListener('click', () => {
            if(user.value === '' && message.value ===''){
                alert("Please fill out user and message fields before sending");
            } else if (user.value === ""){
                alert("Please fill out user field before sending");
            } else if (message.value === ''){
                alert("Please fill out message field before sending");
            } else {
              alert(`Message successfully sent to: ${user.value}`);
            }

        });