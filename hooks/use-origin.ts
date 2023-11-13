import { useMount } from "@/lib/use-mount";

export const useOrigin = () => {
  const isMounted = useMount();

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  if (!isMounted) return "";

  return origin;
};
