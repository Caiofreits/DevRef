import { useEffect, useState } from "react";
import { getMenuItems } from "../services/cafeApi";
import type { LoadState, MenuItem } from "../types";

export function useMenuItems() {
  const [state, setState] = useState<LoadState<MenuItem[]>>({ status: "loading" });
  const [reloadToken, setReloadToken] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      setState({ status: "loading" });
      try {
        const data = await getMenuItems({ signal: controller.signal });
        setState(data.length === 0 ? { status: "empty" } : { status: "success", data });
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          console.error(error);
          setState({ status: "error", message: error.message });
        }
      }
    }

    load();
    return () => controller.abort();
  }, [reloadToken]);

  function retry() {
    setReloadToken((current) => current + 1);
  }

  return { state, retry };
}
