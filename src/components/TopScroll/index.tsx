import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
const TopScroller:React.FC = () => {  
  const curr = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [curr]);

  return null;
};

export default TopScroller;


