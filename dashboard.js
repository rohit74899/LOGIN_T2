document.addEventListener('DOMContentLoaded', function () {
    // Dummy data for metrics
    const metricsData = {
        totalRevenue: 1000000,
        totalJobs: 500,
        ticketsCreated: 200,
        outstandingAmount: 100000,
        membershipsSold: 50,
        jobsCompleted: 300,
    };

    // Update metric values
    Object.keys(metricsData).forEach(metric => {
        document.getElementById(metric).textContent = `${metric.charAt(0).toUpperCase()}${metric.slice(1)}: $${metricsData[metric]}`;
    });

    // Dummy data for bar charts
    const revenueByLocationData = {
        labels: ['Location 1', 'Location 2', 'Location 3', 'Location 4', 'Location 5'],
        datasets: [{
            label: 'Revenue by Job Location',
            data: [300000, 400000, 300000, 250000, 300000], // Dummy values
            backgroundColor: ['#00cc99', '#00cc99', '#00cc99', '#00cc99', '#00cc99'],
        }],
    };

    const revenueByJobTypeData = {
        labels: ['Job Type A', 'Job Type B', 'Job Type C', 'Job Type D', 'Job Type E'],
        datasets: [{
            label: 'Revenue by Job Type',
            data: [150000, 250000, 200000, 304000, 300000], // Dummy values
            backgroundColor: ['#00cc99', '#00cc99', '#00cc99', '#00cc99', '#00cc99'],
        }],
    };

    // Create bar charts with indexAxis set to 'y'
    createBarChart('revenueByLocationChart', revenueByLocationData);
    createBarChart('revenueByJobTypeChart', revenueByJobTypeData);
});

function createBarChart(containerId, data) {
    const container = document.getElementById(containerId);
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            indexAxis: 'y', // Set indexAxis to 'y'
            scales: {
                x: {
                    beginAtZero: true,
                },
            },
        },
    });
}
