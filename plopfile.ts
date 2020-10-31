import {NodePlopAPI} from 'plop'

export default function (plop: NodePlopAPI): void {
  plop.setGenerator('component', {
    description: 'UI Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the component name?',
      },
      {
        type: 'input',
        name: 'htmlElement',
        message: 'What is the HTML element container for this component?',
        default: 'div',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: './src/components/{{name}}',
        base: './plop-templates/component',
        templateFiles: './plop-templates/component/*.hbs',
      },
    ],
  })
  plop.setGenerator('feature', {
    description: 'UI Feature',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the feature component name?',
      },
      {
        type: 'input',
        name: 'htmlElement',
        message:
          'What is the HTML element container for this feature component?',
        default: 'div',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: './src/features/{{name}}',
        base: './plop-templates/feature',
        templateFiles: './plop-templates/feature/*.hbs',
      },
    ],
  })
}
