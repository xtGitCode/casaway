export type actionFunction = (
    prevSate: any, // same page session memory of previous submission result
    formData: FormData // user input in the form
) => Promise<{message:string}>; // return message to display to user

export type PropertyCardProps = {
    image: string;
    id: string;
    name: string;
    tagline: string;
    country: string;
    price: number;
};

export type DateRangeSelect = {
  startDate: Date;
  endDate: Date;
  key: string;
};

export type Booking = {
  checkIn: Date;
  checkOut: Date;
};