const houseRobber = (values) => {
    let take = 0;
    let skip = 0;

    values.forEach((value) => {
        const nextTake = skip + value;
        skip = Math.max(skip, take);
        take = nextTake;
    });

    return Math.max(take, skip);
};

module.exports = houseRobber;
