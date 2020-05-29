import portugueseMessages from 'ra-language-portuguese';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const messages = {
  pt: Object.assign(portugueseMessages, {
    resources: {
      users: {
        name: 'Usuário |||| Usuários',
        fields: {
          birthday: 'Data de nascimento',
          phone: 'Telefone',
          name: 'Nome',
          email: 'E-mail',
        },
      },
      barbers: {
        name: 'Barbeiro |||| Barbeiros',
        fields: {
          birthday: 'Data de nascimento',
          phone: 'Telefone',
          name: 'Nome',
          email: 'E-mail',
          transport: 'Transporte',
          address: {
            street: 'Rua',
            city: 'Cidade',
            district: 'Bairro',
            number: 'Número',
            complement: 'Complemento',
          },
        },
      },
      appointments: {
        name: 'Solicitação |||| Solicitações',
        fields: {
          cost: 'Preço',
          date: 'Agendado para',
          status: 'Situação',
          services: 'Servicos',
          customer: 'Cliente',
          barber: 'Barbeiro',
        },
      },
    },
  }),
};

export const i18nProvider = polyglotI18nProvider(
  locale => messages[locale],
  'pt'
);
