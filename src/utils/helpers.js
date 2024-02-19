const messages = {
  ServerErrorException: 'Alguma coisa saiu errado!',
  InvalidAuthenticationException: 'Seu e-mail e/ou senha estão inválidos.',
}

export const errorMessage = (code = 'ServerErrorException') => messages[code]
