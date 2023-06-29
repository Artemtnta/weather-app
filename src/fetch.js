export function fetchPlace() {
  navigator.geolocation.getCurrentPosition((pos) => {
    const { latitude, longitude } = pos.coords;
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
    )
      .then((res) => res.json())
      .then((data) => {
        const { time, temperature_2m } = data.hourly;
        return time.map((value, index) => {
          return {
            [value]: temperature_2m[index],
          };
        });
        // return (
        //   <div>
        //     <ul>
        //       {Arr.map((el, index) => (
        //         <li key={index}>`${el}`</li>
        //       ))}
        //     </ul>
        //   </div>
        // );
      });
  });
}

//``
