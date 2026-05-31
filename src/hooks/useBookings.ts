import { useState, useEffect, useCallback } from "react";

export type Booking = {
  id: string;
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
  createdAt: string;
};

const LOCAL_STORAGE_KEY = "marcondes_bookings";

export function useBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        try {
          setBookings(JSON.parse(stored));
        } catch (e) {
          console.error("Error parsing bookings", e);
        }
      }
    }
  }, []);

  const createBooking = useCallback((bookingData: Omit<Booking, "id" | "createdAt">) => {
    const newBooking: Booking = {
      ...bookingData,
      id: "MA-" + Math.floor(100000 + Math.random() * 900000),
      createdAt: new Date().toISOString(),
    };

    setBookings((prev) => {
      const updated = [...prev, newBooking];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });

    return newBooking;
  }, []);

  const cancelBooking = useCallback((id: string) => {
    setBookings((prev) => {
      const updated = prev.filter((b) => b.id !== id);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  return {
    bookings,
    createBooking,
    cancelBooking,
  };
}
