import * as express from 'express';
import { AuthMiddleware } from '@/middlewares/authMiddleware';
import { errorService, tokenService, userService } from '@/services';
import { CrudController } from '@/controllers';
import { Users } from '@/models';
import { Request, Response } from '@/routers/base';
import { hashPassword } from '@/services/utils';

const router = express.Router();

export class UserController extends CrudController<typeof userService> {
  constructor() {
    super(userService);
  }
  // Tùy chỉnh hàm đăng nhập
  async login(body: { username: string; password: string }) {
    const { username, password } = body;

    if (!username || !password) {
      throw errorService.database.customError('Login fail', 404);
    }

    const user: any = await Users.findOne({ where: { password, username } });
    if (!user) {
      throw errorService.database.customError('User not found', 404);
    } else {
      const token = tokenService.generateToken({
        userId: user.id,
        exp: 0,
      });
      user.dataValues.token = token;
      console.log('Generated token:', token);
    }

    return user;
  }

  // TODO: define function register, logic:
  async register(body: { username: string; password: string }) {
    console.log(body);
    const { username, password } = body;

    // Kiểm tra xem tên đăng nhập đã tồn tại hay chưa
    const existingUser: any = await Users.findOne({ where: { username } });
    if (existingUser) {
      throw errorService.database.customError('Username already exists', 404);
    }
    // Mã hóa mật khẩu trước khi lưu vào cơ sở dữ liệu
    const hashedPassword = await hashPassword(password);
    // Tạo mới người dùng
    return await Users.create({ username, password: hashedPassword });
  }
}
export default router;
