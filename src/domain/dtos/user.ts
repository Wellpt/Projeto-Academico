export interface UserDto {
  id: string
  name: string
  email: string
  password: string
}
export interface UserViewDto {
  name: string
  email: string
}
export const user = {
  name: '',
  email: '',
  password: ''
}
export const UserView = {
  name: user.name,
  email: user.email
}