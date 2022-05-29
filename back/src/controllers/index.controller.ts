import { Controller, Get } from 'routing-controllers';

@Controller()
export class IndexController {
  constructor() {
    console.log('');
  }

  @Get('/')
  index() {
    return 'OK';
  }
}
