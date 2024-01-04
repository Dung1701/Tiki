import * as express from 'express';
import { AuthMiddleware } from '@/middlewares/authMiddleware';
import { errorService, tokenService, userService } from '@/services';
import { CrudController } from '@/controllers';
import { Users } from '@/models';
import { Request, Response } from '@/routers/base';
import { hashPassword, comparePassword } from '@/services/utils';
import bcrypt from 'bcrypt';

const router = express.Router();

export class UserController extends CrudController<typeof userService> {
  constructor() {
    super(userService);
  }
  // Tùy chỉnh hàm đăng nhập
  async login(body: { username: string; password: string }) {
    const { username, password } = body;
    // const hashedPassword = await hashPassword(password);
    console.log('hashedPassword', password);
    if (!username || !password) {
      throw errorService.database.customError('Login fail', 404);
    }
    const user: any = await Users.findOne({ where: { username } });
    console.log(user);
    if (!user) {
      throw errorService.database.customError('User not found', 404);
    } else {
      const isPasswordMatch = await comparePassword(password, user.password);
      // Sử dụng hàm hashPassword để tạo hashedPassword từ password người dùng nhập vào
      // const enteredHashedPassword = await hashPassword(password);
      // const isPasswordMatch = await comparePassword(enteredHashedPassword, user.password);
      if (!isPasswordMatch) {
        throw errorService.database.customError('Incorrect password', 404);
      }
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
  // async register(body: { username: string; password: string }) {
  //   console.log(body);
  //   const { username, password } = body;

  //   // Kiểm tra xem tên đăng nhập đã tồn tại hay chưa
  //   const existingUser: any = await Users.findOne({ where: { username } });
  //   if (existingUser) {
  //     throw errorService.database.customError('Username already exists', 404);
  //   }
  //   // Mã hóa mật khẩu trước khi lưu vào cơ sở dữ liệu
  //   const hashedPassword = await hashPassword(password);
  //   // Tạo mới người dùng
  //   return await Users.create({ username, password: hashedPassword });
  // }

  async register(body: { username: string; password: string; useHashedPassword?: boolean }) {
    console.log(body);
    const { username, password, useHashedPassword } = body;

    // Kiểm tra xem tên đăng nhập đã tồn tại hay chưa
    const existingUser: any = await Users.findOne({ where: { username } });
    if (existingUser) {
      throw errorService.database.customError('Username already exists', 404);
    }

    try {
      let hashedPassword;
      if (useHashedPassword) {
        // Nếu sử dụng hashedPassword, mã hóa mật khẩu trước khi lưu vào cơ sở dữ liệu
        hashedPassword = bcrypt.hashSync(password, 10);
        // hashedPassword = await hashPassword(password);
      } else {
        // Nếu không sử dụng hashedPassword, lưu mật khẩu trực tiếp
        hashedPassword = password;
      }

      // Tạo mới người dùng với hashedPassword hoặc password tùy thuộc vào lựa chọn
      return await Users.create({ username, password: hashedPassword });
    } catch (error) {
      console.error('Error registering user:', error);
      throw error; // Xử lý lỗi theo cách phù hợp với ứng dụng của bạn
    }
  }
}
export default router;
