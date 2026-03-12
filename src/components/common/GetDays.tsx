import moment from "moment";

export const GetDays = (date: string) => {
    const today = moment();

    const itemTime = moment(date);

    if (!itemTime.isValid()) {
        return "Invalid date"; // Return directly as a string
    }

    const timeDifference = today.diff(itemTime, 'hours');

    if (timeDifference < 24) {
        return `${timeDifference} hours ago`;
    } else if (timeDifference < 24 * 7) {
        const days = Math.floor(timeDifference / 24);
        return days === 1 ? '1 day ago' : `${days} days ago`;
    } else if (timeDifference < 24 * 30) {
        const weeks = Math.floor(timeDifference / (24 * 7));
        return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
    } else if (timeDifference < 24 * 30 * 12) {
        const months = Math.floor(timeDifference / (24 * 30));
        return months === 1 ? '1 month ago' : `${months} months ago`;
    } else {
        const years = Math.floor(timeDifference / (24 * 30 * 12));
        return years === 1 ? '1 year ago' : `${years} years ago`;
    }
};