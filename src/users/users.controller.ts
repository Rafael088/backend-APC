import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Res,
    HttpStatus,
    Body
} from '@nestjs/common';
import { CreateUsersDTO } from "./dto/user.dto";
import { UsersService } from "./users.service";


@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Post('/create')
    async createUser(@Res() res, @Body() createUserDTO: CreateUsersDTO) {
        const user =  await this.usersService.createUser(createUserDTO)
        if (user) {
            return res.status(HttpStatus.OK).json({
                message: 'user succes create',
                user: user
            });
        }else{
            return res.status(HttpStatus.OK).json({
                message: 'user fails create'
            });
        }
        
    }
    @Get('/')
    async getUser(@Res() res) {
        const user =  await this.usersService.getUsers()
        return res.status(HttpStatus.OK).json({
            message: 'user succes geting',
            users: user
        });
    }
    @Post('/auth')
    async getAuth(@Res() res, @Body() body) {
        const {email, password} = body
        const user =  await this.usersService.getAuth(email, password)
        return res.status(HttpStatus.OK).json({
            message: 'user succes auth ',
            user: user
        });
    }
}
