import { errorService, userService } from '@/services';
import { CrudController } from '@/controllers';
import { Users } from '@/models';
import { tokenService } from '@/services';

export class UserController extends CrudController<typeof userService> {
  constructor() {
    super(userService);
  }

  // Tùy chỉnh hàm đăng nhập
  async login(body: { username: string; password: string }) {
    const { username, password } = body;
    console.log(body);
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
      console.log('aaaa', user, password);
    }

    return user;
  }
}
