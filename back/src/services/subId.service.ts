import { ISubIdDto } from '@dtos/subid.dto';
import { subIds } from '@models/subIds.model';

export class SubIdService {
  private data = subIds;

  /**
   * All subIds
   */
  public async findAllSubIds(): Promise<ISubIdDto[]> {
    return this.data;
  }

  /**
   * Find SubIds by Id
   * @param id - expected id
   */
  public async findBySubId(id: string): Promise<ISubIdDto> {
    return this.data.find(value => value.id === id);
  }

  /**
   * Create batch of subIds with a date
   * @param ids - the list of ids
   */
  public async createSubIds(ids: string[]): Promise<number> {
    const arr: ISubIdDto[] = ids.map(item => ({ id: item, date: new Date() }));
    return this.data.push(...arr);
  }
}

export default new SubIdService();
