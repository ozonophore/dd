import { ISubIdDto } from '@dtos/subid.dto';
import subIdService from '@services/subId.service';

export interface IExpirationService {
  checkSubId(subid: string): Promise<boolean>;
}

class ExpirationService implements IExpirationService {
  private service = subIdService;

  public async checkSubId(subid: string): Promise<boolean> {
    const data: ISubIdDto = await this.service.findBySubId(subid);
    if (!data) {
      return false;
    }
    const diff = Date.now() - data.date.getTime();
    const resultInMinutes = Math.round(diff / 60000);
    return resultInMinutes < 5;
  }
}

export default new ExpirationService();
