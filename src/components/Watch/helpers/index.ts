export const durationValues = {
  lessThan8: "< 8 min",
  between8and15: "8-15 min",
  moreThan15: "15+ min",
};
export const durationOptions = [
  {
    name: "lessThan8",
    value: "< 8 min",
  },
  {
    name: "between8and15",
    value: "8-15 min",
  },
  {
    name: "moreThan15",
    value: "15+ min",
  },
];

export const getMinutesAndSeconds = (duration: string) => {
  const durationValues = duration.split(":");
  const minutes = parseInt(durationValues[0]);
  const seconds = parseInt(durationValues[1]);

  return { minutes, seconds };
};

export const durationFilters = {
  lessThan8: (duration: string) => {
    const { minutes } = getMinutesAndSeconds(duration);
    return minutes < 8;
  },
  between8and15: (duration: string) => {
    const { minutes } = getMinutesAndSeconds(duration);
    return minutes > 8 && minutes < 15;
  },
  moreThan15: (duration: string) => {
    const { minutes } = getMinutesAndSeconds(duration);
    return minutes > 15;
  },
};
