import { Inject, Injectable } from "@nestjs/common";
import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../users/user.entity';
import { Strategy, VerifyCallback } from "passport-google-oauth20";
import googleOauthConfig from "../config/google-oauth.config";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google'){

    constructor(
        @Inject(googleOauthConfig.KEY) private googleConfiguration:
        ConfigType<typeof googleOauthConfig>,
        @InjectRepository(User) private UserRepository: Repository<User>,
    ){
        super({
            clientID: googleConfiguration.clientID,
            clientSecret: googleConfiguration.clientSecret,
            callbackURL: googleConfiguration.callbackURL,
            scope: ['email', 'profile']
        }); 
    }

    async validate(
        _accessToken:String, 
        _refreshToken:string, 
        profile:any, 
        done:VerifyCallback,
        ):Promise<any>{
        const {id, name, emails } = profile

        console.log({ profile })

        const user = {
            provider: 'google',
            providerId: id,
            email: emails[0].value,
            name: `${name.givenName} ${name.familyName}`,
        };

        done(null, user)
    }
} 