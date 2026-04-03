enum TravelVacation {
    Abroad = 'Abroad',
    InCountry ='InCountry'
}

enum MountainVacation { 
    Ski = 'Ski', 
    Hiking = 'Hiking' 
}

enum BeachVacation { 
    Pool = 'Pool', 
    Sea = 'Sea', 
    ScubaDiving = 'ScubaDiving' 
}

interface Holiday {
    set start(val: Date);
    set end(val: Date);
    getInfo(): string;
}

interface VacationManager<T, V> { 
    reserveVacation(holiday: T, vacationType: V): void; 
    listReservations(): string;
}

