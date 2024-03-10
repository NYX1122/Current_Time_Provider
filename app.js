export default async function () {
  try {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const timeData = {
      year,
      month,
      day,
      hours,
      minutes,
      seconds,
    };

    console.log('Current_Time_Provider has successfully returned time data:');
    console.log(JSON.stringify(timeData, null, 2));
    return timeData;
  } catch (error) {
    console.error('Current_Time_Provider encountered an error:');
    console.error(error);
  }
}
