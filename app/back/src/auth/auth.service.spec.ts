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
  fullName: 'Jimmy',
};

export const mockUser: User = {
  id: '1',
  email: 'jimmylo16@gmail.com',
  fullName: 'Jimmy',
  password: 'Clave123',
};
export const mockCreatedUser = {
  email: 'jimmylo16@gmail.com',
  fullName: 'Jimmy',
  id: '1',
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
          useValue: {
            // find: jest.fn().mockResolvedValue(mockUser),
            // create: jest.fn().mockResolvedValue(mockUser),
            // save: jest.fn().mockResolvedValue(mockUser),
          },
        },
      ],
    }).compile();

    authService = moduleRef.get<AuthService>(AuthService);
    userRepository = moduleRef.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  it('should create a user if the email is not in the database', async () => {
    jest.spyOn(userRepository, 'find').mockResolvedValue([]);
    jest.spyOn(userRepository, 'create').mockReturnValue(mockUser);
    jest.spyOn(userRepository, 'save').mockResolvedValue(mockUser);
    const result = await authService.create(mockCreateUserInput);

    expect(result).toEqual({
      ...mockCreatedUser,
      token: authService.getJwtToken({ email: mockUser.email }),
    });
  });
  it('should return a message if the user is already created', async () => {
    jest.spyOn(userRepository, 'find').mockResolvedValue([mockUser]);

    const result = await authService.create(mockCreateUserInput);

    expect(result).toEqual({
      msg: `The user with the ${mockUser.email} was already created`,
    });
  });
});
