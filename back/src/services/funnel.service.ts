import { IFunnel } from '@dtos/funnel.dto';
import { funnelsModel } from '@models/funnels.model';

export interface IFunnelService {
  findAll(): Promise<IFunnel[]>;
  findById(id: string): Promise<IFunnel[]>;
  findDataById(id: string): Promise<any>;
  create(funnel: IFunnel);
}

class FunnelService implements IFunnelService {
  private data: IFunnel[] = funnelsModel;

  public async findAll(): Promise<IFunnel[]> {
    return this.data;
  }

  public async findById(id: string): Promise<IFunnel[]> {
    const newData: IFunnel[] = [...this.data];
    return newData.filter(item => id === item.id);
  }

  public async findDataById(id: string): Promise<any> {
    const data = this.data.find(item => id === item.id);
    if (!data) {
      return null;
    }
    const buff = Buffer.from(data.payload, 'base64');

    return JSON.parse(buff.toString('utf-8').replace(/\r?\n|\r/g, ' '));
  }

  public async create(funnel: IFunnel): Promise<number> {
    return this.data.push({ ...funnel });
  }
}

export default new FunnelService();
