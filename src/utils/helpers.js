const messages = {
  InvalidAuthenticationException: 'Seu e-mail ou senha estão inválidos.'
}

export const errorMessage = (code) => messages[code]
