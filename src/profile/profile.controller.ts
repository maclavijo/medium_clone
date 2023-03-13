import { User } from '@app/user/decorators/user.decorator';
import { AuthGuard } from '@app/user/guards/auth.guard';
import { Controller, Get, Param, UseGuards, UsePipes } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileResponseInterface } from './types/profileResponseInterface';
import { UserEntity } from '@app/user/user.entity';

@Controller('profiles')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

  @Get(':username')
  @UseGuards(AuthGuard)
  async getProfile(
    @User('id') currentUserId: number,
    @Param('username') profileUsername: string,
  ): Promise<ProfileResponseInterface> {
    const profile = await this.profileService.getProfile(
      currentUserId,
      profileUsername,
    );
    return this.profileService.buildProfileResponse(profile);
  }
}
