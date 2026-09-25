import { useEffect, useState } from "react";
import { getMenuItems } from "../services/cafeApi";

export function useMenuItems() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("loading");
  const [reloadToken, setReloadToken] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        setStatus("loading");
        const data = await getMenuItems({ signal: controller.signal });
        setItems(data);
        setStatus(data.length === 0 ? "empty" : "success");
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
          setStatus("error");
        }
      }
    }

    load();
    return () => controller.abort();
  }, [reloadToken]);

  function retry() {
    setReloadToken((current) => current + 1);
  }

  return { items, status, retry };
}
