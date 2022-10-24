export  const declinationYear = (value) => {
  if (value === 1) {
    return 'год';
  } else if (value > 1 && value < 5) {
    return 'года';
  } else if (value > 5) {
    return 'лет';
  }
}

export const declinationMOnth = (value) => {
  if (value === 1) {
    return 'месяц';
  } else if (value > 1 && value < 5) {
    return 'месяца';
  } else if (value > 5) {
    return 'месяцев';
  }
}