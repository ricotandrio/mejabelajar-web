import { BaseResponse } from "./baseResponse";

export interface LoginUserResponse extends BaseResponse {
  data: {
    bod: string;
    description?: string;
    email: string;
    id: string;
    is_active: boolean;
    is_mentor: boolean;
    phone_number: string;
    profile_picture?: string;
    university: string;
    username: string;
  };
}

export interface RegisterUserResponse extends BaseResponse {
  data: {
    id: string;
    username: string;
    university: string;
    email: string;
    phone_number: string;
    description?: string;
    profile_picture?: string;
    bod: string;
    is_mentor: boolean;
  };
}

export interface GetUserByIdResponse extends BaseResponse {
  data: {
    id: string;
    username: string;
    university: string;
    email: string;
    phone_number: string;
    description?: string;
    profile_picture?: string;
    bod: string;
    is_mentor: boolean;
  };
}

export interface UpdateUserResponse extends BaseResponse {
  data: {
    id: string;
    username: string;
    university: string;
    email: string;
    phone_number: string;
    description?: string;
    profile_picture?: string;
    bod: string;
    is_mentor: boolean;
  };
}

export class Example {
  static LoginUserResponse: LoginUserResponse = {
    code: 200,
    message: "Login success",
    data: {
      id: "1",
      username: "Rico Tandrio",
      university: "BINUS University",
      email: "ricotandrio@mejabelajar.edu",
      phone_number: "081234567890",
      description: "I am a Student",
      profile_picture: "",
      bod: "2000-01-01T00:00:00.000Z",
      is_mentor: false,
      is_active: true,
    },
  };

  static RegisterUserResponse: RegisterUserResponse = {
    code: 201,
    message: "Register success",
    data: {
      id: "1",
      username: "Rico Tandrio",
      university: "BINUS University",
      email: "ricotandrio@mejabelajar.edu",
      phone_number: "081234567890",
      description: "I am a Student",
      profile_picture: "",
      bod: "2000-01-01T00:00:00.000Z",
      is_mentor: true,
    },
  };

  static GetUserByIdResponse: GetUserByIdResponse = {
    code: 200,
    message: "Login success",
    data: {
      id: "1",
      username: "Rico Tandrio",
      university: "BINUS University",
      email: "ricotandrio@mejabelajar.edu",
      phone_number: "081234567890",
      description: "I am a Student",
      profile_picture: "",
      bod: "2000-01-01T00:00:00.000Z",
      is_mentor: false,
    },
  };

  static UpdateUserResponse: UpdateUserResponse = {
    code: 200,
    message: "Update success",
    data: {
      id: "1",
      username: "Rico Tandrio",
      university: "BINUS University",
      email: "ricotandrio@mejabelajar.edu",
      phone_number: "081234567890",
      description: "I am a Student",
      profile_picture: "",
      bod: "2000-01-01T00:00:00.000Z",
      is_mentor: false,
    },
  };
}
