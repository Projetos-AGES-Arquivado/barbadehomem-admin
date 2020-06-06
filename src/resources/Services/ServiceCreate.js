import React from 'react';
import {
    Create,
    DateInput,
    TextInput,
    NumberInput,
    FormTab,
    TabbedForm,
} from 'react-admin';

import './styles.css';

const ServiceCreate = props => {
    return (
        <Create {...props}>
            <TabbedForm redirect="list">
                <FormTab label="Novo Serviço">
                    <TextInput source="titleService" />
                    <TextInput source="description" />
                    <NumberInput source="cost" />
                    <NumberInput source="duration" />
                </FormTab>

            </TabbedForm>
        </Create>
    );
};

export default ServiceCreate;
