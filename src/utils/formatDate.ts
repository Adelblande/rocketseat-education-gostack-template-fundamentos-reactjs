const formatDate = (date: Date): string => {
  const formatedDate = Intl.DateTimeFormat('pt-BR', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  return formatedDate.format(new Date(date));
};

export default formatDate;
