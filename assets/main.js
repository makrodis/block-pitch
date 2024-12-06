// Chart configurations and data (Chart Setup Parameters)
const chartConfig = {
    line: {
        type: 'line',
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    },
    bar: {
        type: 'bar',
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    }
};

// Initialize charts when present on page (Chart Initialization)
function initCharts() {
    // Revenue Chart (Financial Performance)
    const revenueChart = document.getElementById('revenueChart');
    if (revenueChart) {
        new Chart(revenueChart, {
            ...chartConfig.line,
            data: {
                labels: ['Q1 (First Quarter)', 'Q2 (Second Quarter)', 'Q3 (Third Quarter)', 'Q4 (Fourth Quarter)'],
                datasets: [{
                    label: 'Revenue in Billions (Quarterly Revenue)',
                    data: [4.5, 4.8, 5.2, 5.6], // (Quarterly Revenue Values)
                    borderColor: '#006AFF',
                }]
            }
        });
    }

    // Market Share Chart (Competitive Position)
    const marketShare = document.getElementById('marketShareChart');
    if (marketShare) {
        new Chart(marketShare, {
            type: 'pie',
            data: {
                labels: ['Block (SQ)', 'PayPal (PYPL)', 'Stripe (Private)', 'Others (Competitors)'],
                datasets: [{
                    data: [25, 35, 20, 20], // (Market Share Percentages)
                    backgroundColor: ['#006AFF', '#22C55E', '#EAB308', '#94A3B8']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 2,
            }
        });
    }

    // Payments Growth Chart (Growth Metrics)
    const paymentsChart = document.getElementById('paymentsChart');
    if (paymentsChart) {
        new Chart(paymentsChart, {
            type: 'line',
            data: {
                labels: ['2021 (Past)', '2022 (Previous)', '2023 (Current)', '2024 (Projected)'],
                datasets: [{
                    label: 'Payment Volume in Billions (Transaction Volume)',
                    data: [120, 140, 165, 190], // (Payment Volume Data)
                    borderColor: '#006AFF'
                }]
            }
        });
    }

    // Afterpay Growth Chart (Acquisition Performance)
    const afterpayChart = document.getElementById('afterpayChart');
    if (afterpayChart) {
        new Chart(afterpayChart, {
            type: 'bar',
            data: {
                labels: ['Q1 (First)', 'Q2 (Second)', 'Q3 (Third)', 'Q4 (Fourth)'],
                datasets: [{
                    label: 'BNPL Volume (Buy Now Pay Later)',
                    data: [2.1, 2.4, 2.8, 3.2], // (BNPL Transaction Volumes)
                    backgroundColor: '#22C55E'
                }]
            }
        });
    }

    // Profit Margin Chart (Profitability Metrics)
    const profitChart = document.getElementById('profitChart');
    if (profitChart) {
        new Chart(profitChart, {
            type: 'line',
            data: {
                labels: ['Q1 (First)', 'Q2 (Second)', 'Q3 (Third)', 'Q4 (Fourth)'],
                datasets: [{
                    label: 'Gross Margin % (Profit Margin)',
                    data: [28, 29, 30, 31], // (Margin Percentages)
                    borderColor: '#EAB308'
                }]
            }
        });
    }

    // Revenue Diversification Chart (Revenue Breakdown)
    const diversificationChart = document.getElementById('diversificationChart');
    if (diversificationChart) {
        new Chart(diversificationChart, {
            type: 'doughnut',
            data: {
                labels: ['Square (Business)', 'Cash App (Consumer)', 'Afterpay (BNPL)', 'Other (Additional)'],
                datasets: [{
                    data: [45, 35, 15, 5], // (Revenue Distribution)
                    backgroundColor: ['#006AFF', '#22C55E', '#EAB308', '#94A3B8']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 2,
            }
        });
    }
}

// Handle navigation active states (Navigation Functionality)
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });
}

// Initialize when DOM is loaded (Page Load)
document.addEventListener('DOMContentLoaded', () => {
    setActiveNav();
    initCharts();
});