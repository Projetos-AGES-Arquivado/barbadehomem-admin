export const statusParser = (v) => {
  switch (v) {
    case "pending":
      return "Em análise";
    case "booked":
      return "Agendado";
    case "done":
      return "Concluído";
    case "canceled":
      return "Cancelado";
    default:
      return null;
  }
};
