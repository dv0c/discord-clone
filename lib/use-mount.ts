import { useEffect, useState } from "react";

export const useMount = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  return isMounted;
};
