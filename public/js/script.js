// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize charts (moved from HTML to here for better organization)
    initializeCharts();
    
    // Search functionality
    setupSearch();
    
    // Button actions
    setupButtons();
    
    // Profile image click
    setupProfile();
    
    // Notification interactions
    setupNotifications();
    
    // Responsive adjustments
    handleResponsive();
    fetchTopics();
});
function fetchTopics() {
    fetch('http://localhost:5000/api/topics')
        .then(res => res.json())
        .then(data => {
            const table = document.querySelector('.popular-topics table');
            
            // Remove old rows except for header
            table.querySelectorAll('tr:not(:first-child)').forEach(row => row.remove());

            // Add new rows
            data.forEach(topic => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${topic.title}</td>
                    <td>${new Date(topic.last_activity).toLocaleString()}</td>
                `;
                table.appendChild(tr);
            });
        })
        .catch(err => {
            console.error('Error fetching topics:', err);
        });
}


function initializeCharts() {
    const areaChartOptions = {
        series: [
            {
                name: '2020',
                data: [35, 45, 30, 55, 40, 65, 75, 50, 85, 60, 40, 70]
            },
            {
                name: '2021',
                data: [50, 65, 40, 75, 65, 85, 65, 75, 95, 75, 60, 80]
            },
            {
                name: '2022',
                data: [60, 80, 50, 90, 75, 95, 80, 90, 75, 85, 70, 95]
            }
        ],
        chart: {
            height: 350,
            type: 'area',
            toolbar: {
                show: false
            },
            fontFamily: 'Arial, sans-serif',
        },
        colors: ['#43a6dd', '#f77b72', '#7066f5'],
        fill: {
            type: 'gradient',
            opacity: 0.7
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yaxis: {
            min: 0,
            max: 100
        },
        legend: {
            position: 'bottom'
        }
    };

    const pieChartOptions = {
        series: [195.48, 190.94],
        chart: {
            type: 'pie',
            height: 300,
            fontFamily: 'Arial, sans-serif',
        },
        labels: ['Active', 'Total'],
        colors: ['#7066f5', '#f77b72'],
        legend: {
            position: 'right'
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    height: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    const areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
    const pieChart = new ApexCharts(document.querySelector("#pie-chart"), pieChartOptions);
    
    areaChart.render();
    pieChart.render();
}

function setupSearch() {
    const searchInput = document.querySelector('.search-box input');
    const searchIcon = document.querySelector('.search-box .fa-search');
    const bellIcon = document.querySelector('.search-box .fa-bell');
    const commentIcon = document.querySelector('.search-box .fa-comment');
    
    // Search functionality
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            alert(`Searching for: ${this.value}`);
            // In a real app, you would perform an AJAX request here
        }
    });
    
    searchIcon.addEventListener('click', function() {
        if (searchInput.value.trim()) {
            alert(`Searching for: ${searchInput.value}`);
        } else {
            searchInput.focus();
        }
    });
    
    // Notification bell
    bellIcon.addEventListener('click', function() {
        alert('Notifications clicked');
        // In a real app, you would show a dropdown with notifications
    });
    
    // Messages/comment icon
    commentIcon.addEventListener('click', function() {
        alert('Messages clicked');
        // In a real app, you would show a dropdown with messages
    });
}

function setupButtons() {
    const newThreadBtn = document.querySelector('.action-buttons .new-thread');
    const categoryBtn = document.querySelector('.action-buttons .category');
    
    newThreadBtn.addEventListener('click', function() {
        alert('Creating a new thread...');
        // In a real app, this would open a modal or redirect to a new thread page
    });
    
    categoryBtn.addEventListener('click', function() {
        alert('Category selection');
        // In a real app, this would open a dropdown with categories
    });
}

function setupProfile() {
    const profileImg = document.querySelector('.profile img');
    
    profileImg.addEventListener('click', function() {
        alert('Profile menu');
        // In a real app, this would open a dropdown with profile options
    });
}

function setupNotifications() {
    const notifications = document.querySelectorAll('.notification');
    
    notifications.forEach(notification => {
        notification.addEventListener('click', function() {
            alert('Viewing notification details');
            // In a real app, this would open the relevant content
        });
    });
}

function handleResponsive() {
    // Adjust chart sizes on window resize
    window.addEventListener('resize', function() {
        // In a real app, you might want to re-render or resize charts here
        console.log('Window resized - adjust elements as needed');
    });
}