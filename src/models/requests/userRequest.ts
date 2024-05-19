export interface RegisterUserRequest {
  user_name: string;
  university: string;
  email: string;
  phone_number: string;
  bod: string;
  password: string;
  confirm_password: string;
}

export interface LoginUserRequest {
  email: string;
  password: string;
}

export interface UpdateUserRequest {
  id: string;
  user_name: string;
  university: string;
  email: string;
  phone_number: string;
  description: string;
  profile_picture: string;
  bod: string;
}

export interface GetUserByIdRequest {
  id: string;
}