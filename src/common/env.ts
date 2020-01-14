import env from '../../env';
import envProd from '../../env.prod';

export function Env() {
  if (process.env.NODE_ENV?.trim() == 'development') {
    return env;
  } else if (process.env.NODE_ENV?.trim() == 'production') {
    return envProd;
  } else {
    throw new Error('Env variable is not compatible or undefined');
  }
}