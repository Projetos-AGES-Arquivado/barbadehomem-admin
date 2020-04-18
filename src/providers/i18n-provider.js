import portugueseMessages from 'ra-language-portuguese'
import polyglotI18nProvider from 'ra-i18n-polyglot';

const messages = {
    'pt': Object.assign(portugueseMessages, {
      resources: {
        users: {
          name: 'Usuário |||| Usuários',
          fields: {
            birthday: 'Data de nascimento',
            phone: 'Telefone',
            name: 'Nome',
            email: 'E-mail'
          }
        }
      }
    }),
};

export const i18nProvider = polyglotI18nProvider(locale => messages[locale], 'pt');
