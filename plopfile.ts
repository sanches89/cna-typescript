import fs from 'fs'
import path from 'path'
import {NodePlopAPI} from 'plop'

export default function (plop: NodePlopAPI): void {
  plop.setHelper(
    'firstLetterUpperCase',
    (txt: string) => txt.charAt(0).toUpperCase() + txt.slice(1),
  )

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

  plop.setGenerator('hook', {
    description: 'React hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the custom hook name?',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: './src/hooks/{{name}}',
        base: './plop-templates/hook',
        templateFiles: './plop-templates/hook/*.hbs',
      },
    ],
  })

  plop.setGenerator('page', {
    description: 'Page',
    prompts: [
      {
        type: 'input',
        name: 'pathname',
        message: 'What is the pathname?',
      },
      {
        type: 'list',
        name: 'featureName',
        message: 'What is the Feature Name?',
        choices: fs.readdirSync(path.resolve(__dirname, 'src', 'features')),
      },
    ],
    actions: [
      {
        type: 'add',
        path: './src/pages/{{pathname}}.ts',
        templateFile: './plop-templates/page.hbs',
      },
    ],
  })

  plop.setGenerator('api', {
    description: 'API',
    prompts: [
      {
        type: 'input',
        name: 'pathname',
        message: 'What is the API pathname?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: './src/pages/api/{{pathname}}.ts',
        templateFile: './plop-templates/api.hbs',
      },
    ],
  })

  plop.setGenerator('e2e', {
    description: 'E2E',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the e2e name?',
      },
      {
        type: 'list',
        name: 'browser',
        message: 'What is the browser?',
        choices: ['chromium', 'firefox', 'webkit'],
        default: 'chromium',
      },
    ],
    actions: [
      {
        type: 'add',
        path: './src/__e2e__/{{name}}.ts',
        templateFile: './plop-templates/e2e.hbs',
      },
    ],
  })
}
