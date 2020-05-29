export const statusParser = v => {
  switch (v) {
    case 'pending':
      return 'Em análise';
    case 'booked':
      return 'Agendado';
    case 'done':
      return 'Concluído';
    case 'canceled':
      return 'Cancelado';
    default:
      return null;
  }
};

export const formattedServices = services => {
  const formattedServices = services.reduce((text, next, index) => {
    if (index > 0) {
      return text + ` + ${next}`;
    }

    return text + next;
  }, '');
  return formattedServices;
};
