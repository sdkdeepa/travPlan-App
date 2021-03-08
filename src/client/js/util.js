  export const daysremaining = (departure_date, date) => {
        const totalDays = new Date(departure_date).getTime() - new Date().getTime();
        return Math.ceil(totalDays / (24*3600*1000)); 
    }