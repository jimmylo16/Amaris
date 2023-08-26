import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

export const mockCreateUserInput: CreateUserDto = {
  email: 'jimmylo16@gmail.com',
  password: 'Clave123',
  fullName: 'Jimmy ',
};

export const mockCreatedUser: CreateUserDto = {
  email: 'jimmylo16@gmail.com',
  password: 'Clave123',
  fullName: 'Jimmy ',
};

describe('UsersService', () => {
  let authService: AuthService;
  let userRepository: Repository<User>;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
          secretOrPrivateKey: process.env.SECRETKEY || 'secretKey',
          signOptions: {
            expiresIn: 3600,
          },
        }),
      ],
      providers: [
        AuthService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    authService = moduleRef.get<AuthService>(AuthService);
    userRepository = moduleRef.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  // it('should create a user', async () => {
  //   userRepository.create = jest.fn().mockReturnValue(mockCreatedUser);
  //   userRepository.save = jest.fn().mockReturnValue(mockCreatedUser);

  //   const result = await authService.create(mockCreateUserInput);

  //   expect(userRepository.create).toHaveBeenCalledWith(mockCreateUserInput);
  //   expect(userRepository.save).toHaveBeenCalledWith(mockCreatedUser);
  //   expect(result).toEqual(mockCreatedUser);
  // });

  // it('should update a user', async () => {
  //   const user_id = 'unique_id_generated_by_database';
  //   const updateUserInput = {
  //     user_id,
  //   };
  //   const mockUpdatedUser: User = {
  //     ...mockCreatedUser,
  //     ...updateUserInput,
  //   };

  //   userRepository.preload = jest.fn().mockResolvedValue(mockUpdatedUser);
  //   userRepository.save = jest.fn().mockResolvedValue(mockUpdatedUser);

  //   const result = await usersService.update(user_id, updateUserInput);

  //   expect(userRepository.preload).toHaveBeenCalledWith(updateUserInput);
  //   expect(userRepository.save).toHaveBeenCalledWith(mockUpdatedUser);
  //   expect(result).toEqual(mockUpdatedUser);
  // });

  // it('should remove a user', async () => {
  //   const user_id = 'unique_id_generated_by_database';

  //   usersService.findOne = jest.fn().mockResolvedValue(mockCreatedUser);
  //   userRepository.remove = jest.fn().mockResolvedValue(undefined);

  //   const result = await usersService.remove(user_id);

  //   expect(usersService.findOne).toHaveBeenCalledWith(user_id);
  //   expect(userRepository.remove).toHaveBeenCalledWith(mockCreatedUser);
  //   expect(result).toEqual({ user_id });
  // });
});
