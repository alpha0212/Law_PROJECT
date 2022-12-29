import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollSetTop = () => {
  const { pathname } = useLocation();
  const location = useLocation();
  const locationPath = location.pathname.split("/")[2];
  console.log(locationPath, "여깁니단");
  useEffect(() => {
    if (locationPath === undefined) {
      window.scrollTo(0, 0);
    } else {
      return undefined;
    }
  }, [pathname]);

  return null;
};
