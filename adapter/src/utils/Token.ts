export default class Token {

    private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJIY29kZSBUcmluYW1lbnRvcyIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMn0.gJ0dOO0xIWVbz3gQYp59hK6vPwkON4jGhtFGd20IPh4'

    getToken(): string {
        return this.token
    }
}