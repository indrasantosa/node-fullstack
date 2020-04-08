import koaWebpack from 'koa-webpack';
import webpack, { Configuration } from 'webpack';

import frontEndConfig from '../../../webpack.config';

const createWebpack = async () => {
  const compiler = webpack(
    frontEndConfig(process.env.NODE_ENV) as Configuration
  );
  return await koaWebpack({ compiler });
};

export default createWebpack;
