import { Body, Get, HttpCode, JsonController, Param, Post } from 'routing-controllers';
import funnelService, { IFunnelService } from '@services/funnel.service';
import { IFunnel } from '@dtos/funnel.dto';
import expirationService, { IExpirationService } from '@services/expiration.service';

@JsonController()
export class FunnelController {
  private service: IFunnelService = funnelService;
  private expirationService: IExpirationService = expirationService;

  @Get('/funnels')
  async index(): Promise<IFunnel[]> {
    return await this.service.findAll();
  }

  @Get('/funnels/:id')
  async find(@Param('id') id: string): Promise<IFunnel[]> {
    return await this.service.findById(id);
  }

  @Get('/funnels/:id/:subid')
  @HttpCode(200)
  async findData(@Param('id') id: string, @Param('subid') subid: string): Promise<any> {
    if (await expirationService.checkSubId(subid)) {
      return await this.service.findDataById(id);
    }
    return null;
  }

  @Post('/funnels')
  @HttpCode(201)
  async create(@Body() funnel: IFunnel) {
    return { count: await this.service.create(funnel) };
  }
}
