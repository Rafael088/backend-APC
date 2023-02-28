import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose'
import { InjectModel  } from '@nestjs/mongoose'
import { Users } from "./interfaces/users.interfaces";
import { CreateUsersDTO } from "./dto/user.dto";


@Injectable()
export class UsersService {
    constructor(@InjectModel('Users') private readonly usersModels: Model<Users>){}

    async getUsers(): Promise<Users[]> {
        const users = await this.usersModels.find()
        return users
    }

    async getAuth(email: string, password: string): Promise<Users> {
        const user = await this.usersModels.findOne({email: email})
        if (user.password === password) {
            return user            
        }else{
            return
        }
    }
    async createUser(createUsersDTO: CreateUsersDTO): Promise<Users> {
        const temp = await this.usersModels.find()
        let is = false
        temp.forEach(element => {
            if (element.email === createUsersDTO.email) {
                is = true
            }
        });
        if (is) {
            return
        }else{
            const user = await new this.usersModels(createUsersDTO)
            await user.save()
            return user
        }
    }
}
