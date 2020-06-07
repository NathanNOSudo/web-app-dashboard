

/* NOTIFICATIONS [SECTION] AFTER A USERS CLICKS BELL ICON */
const notificationBell = document.getElementsByClassName('bell-icon')[0];
const notificationList = document.getElementsByClassName('notifications')[0];

notificationBell.addEventListener ('click', () => {

    // Removes the green Notification Alert dot when bell is clicked //
    const notificationGreenDot = document.querySelector('.dot');
    notificationGreenDot.style.display = "none";

    notificationList.innerHTML =
`
<ul>
    <li class="notification-item">Monica Added You   <span class="cancel">X</span> </li>
    <li class="notification-item">Review New Features   <span class="cancel">X</span> </li>
    <li class="notification-item">Free Trial Expiring Soon   <span class="cancel">X</span> </li>
</ul>
`;

    //When A User Clicks The 'X' Icon It Deletes The Notification
    const removeNotification = document.querySelectorAll('.cancel');
    removeNotification.forEach(notification => {
        notification.addEventListener('click', e => {
            const element = e.target;
            if (element.classList.contains('cancel')) {
                let parentNotification = element.parentNode;
                console.log(parentNotification);
                let ul = document.querySelector('.notifications ul');
                console.log(ul);
                ul.removeChild(parentNotification);

                if (ul.childElementCount === 0) {
                    ul.style.display = "none";
                  }
            } 
        });
    });
});

/* ALERT BUTTON SECTION*/
const alertBanner = document.getElementById("alert");

alertBanner.innerHTML =
`
    <div class="alert-banner">
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <p class="alert-banner-close">X</p>
    </div>
`;

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"
    }
});

/* TRAFFIC CHART - CHART OPTIONS*/

// This Adds Active Class (Light Green Background) To The Current/Selected Element i.e Hour, Monthly etc
var navList = document.getElementsByClassName("traffic-nav")[0];
var navItem = navList.getElementsByClassName("traffic-nav-link");
for (var i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/* TRAFFIC DATA LINE CHART SECTION*/
let trafficChart = document.getElementById("traffic-chart").getContext('2d');

let cityTrafficData = new Chart(trafficChart, {
    type: 'line', 

    data: {
        labels: ['Leeds', 'Sheffield', 'Manchester', 'Birmingham', 'London', 'Swansea', 'Newcastle',
        'Liverpool', 'Bradford', 'Wolverhampton', 'Nottingham'],

        datasets: [{
            data: [
                4500,
                6000,
                4000,
                7000,
                5500,
                3003,
                1000,
                7500,
                2000,
                3500,
                6500
            ],
            
            lineTension: 0,
            pointBackgroundColor: 'white',
            pointBorderColor: '#7580BF',
            pointBorderWidth: 3,
            pointRadius: 5,  
        }]
    },

    options: {

        responsive: true, 
        maintainAspectRatio: false, 
         
        legend: {
            display: false
        },

        scales: {
            yAxes: [{
                stacked: false 
            }]
        }
    }
});

// Hourly  Data Update
const hourlyData = document.getElementsByClassName('traffic-nav-link')[0];
const hourlyDataValues = [10,30,00,40,10,50,10,20,30,40,40,40];

hourlyData.addEventListener('click', () => {
  
	cityTrafficData.data.datasets[0].data = hourlyDataValues;
	cityTrafficData.update();
});

// Daily  Data Update
const dailyData = document.getElementsByClassName('traffic-nav-link')[1];
const dailyDataValues = [105,307,503,408,103,504,107,201,309,402,401,405];

dailyData.addEventListener('click', () => {
    
	cityTrafficData.data.datasets[0].data = dailyDataValues;
	cityTrafficData.update();
});

// Weekly Data Update
const weeklyData = document.getElementsByClassName('traffic-nav-link')[2];
const weeklyDataValues = [530,450,919,1200,480,2000,501,667,992,1400,1433,2009];

weeklyData.addEventListener('click', () => {
    
	cityTrafficData.data.datasets[0].data = weeklyDataValues;
	cityTrafficData.update();
});

// Monthly Data Update
const monthlyData = document.getElementsByClassName('traffic-nav-link')[3];
const monthlyDataValues = [4500,6000,4000,7000,5500,3003,1000,7500,2000,3500,6500];

monthlyData.addEventListener('click', () => {

	cityTrafficData.data.datasets[0].data = monthlyDataValues;
	cityTrafficData.update();
});


/* DAILY TRAFFIC BAR CHART */
let dailyTrafficData = document.getElementById("daily-chart").getContext('2d');

let dailyChart = new Chart(dailyTrafficData, {
    type: 'bar', 

    data: {
        labels: ['M ', 'T', 'W', 'T', 'F', 'S', 'S'],

        datasets: [{
            data: [
                455,
                555,
                350,
                600,
                755,
                460,
                192
            ],
            
            backgroundColor: '#7580BF',
            borderRadius: 5,
            
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,
         
        legend: {
            display: false
        },
    }
});

/* MOBILE USERS DOUGHNUT CHART SECTION */
let mobileData = document.getElementById("doughnut-chart").getContext('2d');

let mobileDataChart = new Chart(mobileData, {
    type: 'doughnut', 

    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],

        datasets: [{
            data: [
                10,
                15,
                75,
            ],
            
            backgroundColor: ['#75B8BF', '#7EBF88', '#7580BF'],
            borderRadius: 5,
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,
         
        legend: {
            display: true,
            position: 'right',
            labels: {
                boxWidth: 25,
                fontStyle: 'bold'
                } 
        },    
    }
});

/* MESSAGING SECTION */
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', (e) => {

    e.preventDefault();
    if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
        user.value = "";
        message.value = "";
    }
});

/* Autocomplete (Input Message User SECTION) JQuery Plugin Initialization */
var userNames = ['Victoria Chambers' , 'Dale Byrd' , 'Dawn Wood' , 'Dan Oliver'];

$(function () { 
    $("#userField").autocomplete({
      source: [userNames]
    }); 
  });


/*USER SETTINGS SECTION */

//This Function Checks If The Browser Supports Local Storage
  function supportsLocalStorage() {
      try{
      return 'localStorage' in window && window['localStorage'] !== null;
      } catch (e) {
        return false;
      }
  }
 
  const emailCheckbox =  document.querySelector('.email-checkbox');
  const profileCheckbox= document.querySelector('.profile-checkbox');
  const timeZoneDropDown = document.getElementById('timezone');

//Variable Below Will Have Value of TimeZone Drop Down Option//
let timeZoneSelectValue;

//Time Zone Event Listener//
timeZoneDropDown.addEventListener('input', function (event) {

    timeZoneSelectValue = event.target.value;
})

/*
The function below has a collection of the 'SETTINGS CHANGES' made by the User.
(This will be used in the SAVE BUTTON event Listener to Save all the changes)
*/
function changesToSave(){

    localStorage.setItem('emailCheckbox', emailCheckbox.checked);

    localStorage.setItem('profileCheckbox', profileCheckbox.checked);
    
    if(typeof timeZoneSelectValue !== "undefined") {
        localStorage.setItem('timeZone', timeZoneSelectValue);
    }
}

  window.onload = function() {
      if(this.supportsLocalStorage) {

        //Variables for Getting Saved Strings in Storage
        let savedEmailCheckStatus = localStorage.getItem('emailCheckbox');
        let savedProfileCheckStatus = localStorage.getItem('profileCheckbox');
        let savedTimeZone = localStorage.getItem('timeZone');

        //This Will Set The Email Toggle Switch To True/False (Depending What Was Previously Saved)
        if(savedEmailCheckStatus === 'true'){
            emailCheckbox.checked = true;
        } else if (savedEmailCheckStatus === 'false'){
            emailCheckbox.checked = false;
        }

        //This Will Set The Profile Toggle Switch To True/False (Depending What Was Previously Saved)
        if(savedProfileCheckStatus === 'true'){
            profileCheckbox.checked = true;
        } else if(savedProfileCheckStatus === 'false'){
            profileCheckbox.checked = false;
        }
        
        //This Will Set TimeZone Option (Only "if" This was previously selected & Saved)
        if(savedTimeZone !== null) {
           timeZoneDropDown.value = savedTimeZone;
           console.log(savedTimeZone);
        }

        const saveButton = document.querySelector('#save');

        //Event Listener For Save Button
        saveButton.addEventListener('click', () => {

            changesToSave();
        });

        const clearButton = document.querySelector('#cancel');

        //Event Listener For Cancel Button
        clearButton.addEventListener('click', () => {
            
            emailCheckbox.checked = false;
            profileCheckbox.checked = false;
            timeZoneDropDown.value = 0;  
            localStorage.clear();
        });
      }
  }   