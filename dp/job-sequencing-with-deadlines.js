const jobSequencingWithDeadlines = (jobs) => {
    if (!Array.isArray(jobs)) {
        throw new TypeError("jobSequencingWithDeadlines expects an array of jobs.");
    }

    const sortedJobs = jobs.slice().sort((first, second) => second.profit - first.profit);
    const maxDeadline = sortedJobs.reduce((max, job) => Math.max(max, job.deadline), 0);
    const slots = new Array(maxDeadline).fill(null);
    let totalProfit = 0;

    sortedJobs.forEach((job) => {
        for (let slot = Math.min(maxDeadline, job.deadline) - 1; slot >= 0; slot -= 1) {
            if (slots[slot] === null) {
                slots[slot] = job;
                totalProfit += job.profit;
                break;
            }
        }
    });

    return {
        totalProfit,
        scheduledJobs: slots.filter(Boolean),
    };
};

module.exports = jobSequencingWithDeadlines;
