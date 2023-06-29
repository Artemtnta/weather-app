import React from "react";
export const YourWeather = (Arr) => {
  return (
    <div>
      <ul>
        {Arr.map((value) => {
          console.log(value);
        })}
      </ul>
    </div>
  );
};
