interface Route {
  [state: string]: string;
}

export const FrontendRoutes: Route = {
  index: '/',
  apiTest: '/test',
  dashboard: '/dashboard',
  dashboardPersonalInfo: '/dashboard/personal-info',
  dashboardPersonalInfoCreate: '/dashboard/personal-info/create'
};

export const APIRoutes: Route = {
  account: '/api/v1/account',
  personalInfo: '/api/v1/personal-info',
  personalInfoRetrieve: '/api/v1/personal-info/:personalInfoId/retrieve',
  personalInfoShare: '/api/v1/personal-info/:personalInfoId/share',
  personalFileRetrieve: '/api/v1/personal-info/:personalInfoId/file',
  share: '/api/v1/info-share/:shareId'
};
