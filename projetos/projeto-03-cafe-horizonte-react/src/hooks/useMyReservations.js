import { useCallback, useEffect, useState } from "react";
import { cancelReservation, getReservation } from "../services/cafeApi";
import {
  forgetReservationId,
  loadSavedReservationIds,
  rememberReservationId,
} from "../utils/myReservations";

export function useMyReservations() {
  const [reservations, setReservations] = useState([]);
  const [status, setStatus] = useState("loading");
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
      const results = await Promise.all(
        ids.map(async (id) => {
          try {
            const data = await getReservation(id);
            return { id, data };
          } catch (error) {
            if (error.code === "NOT_FOUND") {
              forgetReservationId(id);
            }
            return null;
          }
        }),
      );
      if (cancelled) return;
      const found = results.filter(Boolean);
      setReservations(found);
      setStatus(found.length === 0 ? "empty" : "success");
    }

    loadAll();
    return () => {
      cancelled = true;
    };
  }, [refreshToken]);

  const addByCode = useCallback(async (id) => {
    const data = await getReservation(id);
    rememberReservationId(id);
    setReservations((current) => {
      const withoutExisting = current.filter((item) => item.id !== id);
      return [...withoutExisting, { id, data }];
    });
    setStatus("success");
    return data;
  }, []);

  const cancel = useCallback(async (id) => {
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
