import { Body, Get, HttpCode, JsonController, Post } from 'routing-controllers';
import { ISubIdDto } from '@dtos/subid.dto';
import { OpenAPI } from 'routing-controllers-openapi';
import subIdService from '@services/subId.service';

@JsonController()
export class SubsIdController {
  private service = subIdService;

  @Get('/subids')
  @OpenAPI({ summary: 'Return a list of subids', responses: {} })
  async index(): Promise<ISubIdDto[]> {
    return await this.service.findAllSubIds();
  }

  @Post('/subids')
  @HttpCode(201)
  @OpenAPI({ summary: 'Create new items' })
  async add(@Body() ids: string[]) {
    const count = await this.service.createSubIds(ids);
    return { count: count };
  }
}
