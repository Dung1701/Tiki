import { AuthMiddleware } from './authMiddleware';
import { BlockMiddleware } from './blockMiddleware';
import { QueryMiddleware } from './queryMiddleware';

const blockMiddleware = new BlockMiddleware();
const queryMiddleware = new QueryMiddleware();
const authMiddleware = new AuthMiddleware();

export { blockMiddleware, queryMiddleware, authMiddleware };
