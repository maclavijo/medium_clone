import { UserEntity } from "@app/user/user.entity";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProfileType } from "./types/profile.type";
import { ProfileResponseInterface } from "./types/profileResponseInterface";

@Injectable()
export class ProfileService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {}

    getProfile(
        currentUserId: number,
        profileUsername: string,
    ): Promise<ProfileType>{
        const user = await this.userRepository.findOne({
            where: {
                username: profileUsername,
            },
        });

        if (!user) {
            throw new HttpException('Profile does not exist', HttpStatus.NOT_FOUND);
        }

        return { ...user , following: false };
    }

    buildProfileResponse(profile: ProfileType): ProfileResponseInterface {
        return { profile };
        };
      }
}