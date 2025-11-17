'use client';
import { Calendar } from '@/components/ui/calendar';
import { useEffect, useState } from 'react';
import { DateRange } from 'react-day-picker';
import { useProperty } from '@/utils/store';

import {
  generateDisabledDates,
  generateDateRange,
  defaultSelected,
  generateBlockedPeriods,
} from '@/utils/calendar';
import { useToast } from '@/hooks/use-toast';

function BookingCalendar() {
  const currentDate = new Date();
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
  const bookings = useProperty((state) => state.bookings);
  const {toast} = useToast();

  const blockedPeriods = generateBlockedPeriods({
    bookings,
    today: currentDate,
  });

  const unaviableDates = generateDisabledDates(blockedPeriods)

  useEffect(() => {
    const selectedRange = generateDateRange(range);
    const isDisabledDateIncluded = selectedRange.some((date) => {
      if(unaviableDates[date]) {
        setRange(defaultSelected);
        toast({
          title: 'Date not available',
          description: 'Some dates are booked, please select again'
        });
        return true;
      }
      return false;
    })

    useProperty.setState({ range });
  }, [range]);

  return (
    <Calendar
      mode='range'
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
      className='mb-4'
      disabled={blockedPeriods}
    />
  );
}
export default BookingCalendar;