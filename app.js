export default async function () {
  try {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const timeData = {
      year,
      month,
      day,
      hour,
      minute,
      second,
    };

    console.log('Current_Time_Provider has successfully returned time data:');
    console.log(JSON.stringify(timeData, null, 2));
    return timeData;
  } catch (error) {
    console.error('Current_Time_Provider encountered an error:');
    console.error(error);
  }
}
