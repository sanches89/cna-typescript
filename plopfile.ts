import {NodePlopAPI} from 'plop'

export default function (plop: NodePlopAPI): void {
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
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
}
