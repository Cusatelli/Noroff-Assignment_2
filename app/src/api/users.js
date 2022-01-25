import { BASE_URL } from '.'

export async function apiLoginUser(action = 'login', username) {
    return ['Oops, an error occured while trying to log in!', JSON.stringify({ user: { username } })]
}
