import Router from 'koa-router';
import { APIRoutes } from '../common/enums/routes';
import Account from './controllers/account';
import PersonalInfoController from './controllers/personalInfo';
import PersonalFileController from './controllers/personalFile';
import InfoShareController from './controllers/infoShare';
import InfoShare from './controllers/infoShare';

const createApplicationRouter = () => {
  const router = new Router();

  router.post(APIRoutes.account, Account.create);

  router.post(APIRoutes.personalInfo, PersonalInfoController.create);
  router.get(APIRoutes.personalInfo, PersonalInfoController.index);
  router.post(
    APIRoutes.personalInfoRetrieve,
    PersonalInfoController.getPersonalInfoId,
    PersonalInfoController.verifyEncryptionKey,
    PersonalInfoController.retrieve
  );
  router.post(
    APIRoutes.personalFileRetrieve,
    PersonalInfoController.getPersonalInfoId,
    PersonalInfoController.verifyEncryptionKey,
    PersonalFileController.retrieve
  );

  router.post(
    APIRoutes.personalInfoShare,
    PersonalInfoController.getPersonalInfoId,
    PersonalInfoController.verifyEncryptionKey,
    InfoShare.create
  );

  router.post(
    APIRoutes.share,
    InfoShareController.getShareId,
    InfoShareController.verifyShareKey,
    InfoShareController.verifyExpiry,
    InfoShareController.retrieveData
  );

  return router;
};

export default createApplicationRouter;
