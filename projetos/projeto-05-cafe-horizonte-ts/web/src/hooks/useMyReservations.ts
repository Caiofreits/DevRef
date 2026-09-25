import { useCallback, useEffect, useState } from "react";
import { ApiError, cancelReservation, getReservation } from "../services/cafeApi";
import {
  forgetReservationId,
  loadSavedReservationIds,
  rememberReservationId,
} from "../utils/myReservations";
import type { Reservation } from "../types";

type FoundReservation = { id: string; data: Reservation };
type ReservationsStatus = "loading" | "success" | "empty" | "error";

export function useMyReservations() {
  const [reservations, setReservations] = useState<FoundReservation[]>([]);
  const [status, setStatus] = useState<ReservationsStatus>("loading");
  const [refreshToken, setRefreshToken] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const ids = loadSavedReservationIds();

    if (ids.length === 0) {
      setReservations([]);
      setStatus("empty");
      return;
    }

    async function loadAll() {
      setStatus("loading");
      try {
        const results = await Promise.all(
          ids.map(async (id): Promise<FoundReservation | null> => {
            try {
              const data = await getReservation(id);
              return { id, data };
            } catch (error) {
              if (error instanceof ApiError && error.code === "NOT_FOUND") {
                forgetReservationId(id);
              }
              return null;
            }
          }),
        );
        if (cancelled) return;
        const found = results.filter((item): item is FoundReservation => item !== null);
        setReservations(found);
        setStatus(found.length === 0 ? "empty" : "success");
      } catch (error) {
        if (!cancelled) {
          console.error(error);
          setStatus("error");
        }
      }
    }

    loadAll();
    return () => {
      cancelled = true;
    };
  }, [refreshToken]);

  const addByCode = useCallback(async (id: string): Promise<Reservation> => {
    const data = await getReservation(id);
    rememberReservationId(id);
    setReservations((current) => {
      const withoutExisting = current.filter((item) => item.id !== id);
      return [...withoutExisting, { id, data }];
    });
    setStatus("success");
    return data;
  }, []);

  const cancel = useCallback(async (id: string): Promise<void> => {
    await cancelReservation(id);
    forgetReservationId(id);
    setReservations((current) => {
      const next = current.filter((item) => item.id !== id);
      if (next.length === 0) setStatus("empty");
      return next;
    });
  }, []);

  function retry() {
    setRefreshToken((current) => current + 1);
  }

  return { reservations, status, addByCode, cancel, retry };
}
