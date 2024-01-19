const isToday = (checkDate: Date) => {
  const today = new Date();
  return (
    checkDate.getFullYear() === today.getFullYear() &&
    checkDate.getMonth() === today.getMonth() &&
    checkDate.getDate() === today.getDate()
  );
};

export {isToday};