import { html, TemplateResult } from 'lit';
import '../src/bls-lib.js';

export default {
  title: 'BlsLib',
  component: 'bls-input',
  argTypes: {
    ambient: {
      control: 'ambient',
      description: 'Cambiar el tema de light a dark'
    },
    description: {
      control: 'description',
      description: 'Texto inferior del input'
    },
    label: {
      control: 'label',
      description: 'Texto superior del input'
    },
    descriptionType: {
      control: 'descriptionType',
      description: 'Cambiar el color de la descripción'
    },
    withDescription: {
      control: 'withDescription',
      description: 'Mostar u ocultar la descripción'
    },
    withLabel: {
      control: 'withLabel',
      description: 'Mostrar u ocultar la label'
    },
    isReadonly: {
      control: 'isReadonly',
      description: 'Definir el campo para solo lectura'
    },
    disabled: {
      control: 'disabled',
      description: 'Propiedad para deshabilitar el campo'
    }
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  ambient?: string;
  description?: string;
  label?: string;
  descriptionType?: string;
  withDescription?: boolean;
  withLabel?: boolean;
  isReadonly?: boolean;
  disabled?: boolean;
}

const Template: Story<ArgTypes> = ({
  ambient = 'light',
  description = 'Default description',
  label = 'Name',
  descriptionType = 'info',
  withDescription = false,
  withLabel = true,
  isReadonly = false,
  disabled = false,
}: ArgTypes) => html`
  <bls-input
    ambient="${ambient}"
    description="${description}"
    description-type="${descriptionType}"
    label="${label}"
    ?with-description="${withDescription}"
    ?with-label="${withLabel}"
    ?is-readonly="${isReadonly}"
    ?disabled="${disabled}"
  >
  </bls-input>
`;

export const DefaultInput = Template.bind({});
export const DarkInput = Template.bind({});
DarkInput.args = {
  ambient: 'dark'
};


