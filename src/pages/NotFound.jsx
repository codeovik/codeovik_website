// OdometerCounter.jsx
import React, { useState, useEffect } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";

export default function OdometerCounter({
  start = 0,
  end = 404,
}) {
  const [value, setValue] = useState(start);

  useEffect(() => {
    const t = setTimeout(() => {
      setValue(end);
    }, 50);
    return () => clearTimeout(t);
  }, [end]);

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Odometer value={value} format="(,ddd)" className="text-[200px] font-bold"
        options={{
          animation: "count",
        }}
      />
      <p className="font-medium text-xl">Page Not Found</p>
    </div>
  );
}