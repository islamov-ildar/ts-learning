interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // type Person будет содержать варианты age | name

let key: PersonKeys = 'name'
key = 'age'

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeysWithoutMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // в новом типе остануться только поля name email
type UserKeysWithoutMeta2 = Pick<User, 'name' | 'email'> // в новом типе будут только поля name email

let u1: UserKeysWithoutMeta1 = 'email'
u1 = 'name'