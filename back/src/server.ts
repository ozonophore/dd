import App from '@/app';
import { IndexController } from '@controllers/index.controller';
import validateEnv from '@utils/validateEnv';
import { SubsIdController } from '@controllers/subsid.controller';
import { FunnelController } from '@controllers/funnel.controller';

validateEnv();

const app = new App([IndexController, SubsIdController, FunnelController]);
app.listen();
