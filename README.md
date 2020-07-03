# Fast People

Um agregador de vídeos de dança, amvs, música da internet.
![Telas do aplicativo](img/fastPeople.png)

- [x]  Registrar usuário no servidor Graphql.
- [x]  Login de usuário no servidor Graphql.
- [x]  Redirecionar para um video aleatório da categoria quando clicar na categoria. Ela deverá abrir uma webview com o vídeo do Youtube.
- [x]  Criar uma tabela de profile ela terá as seguintes colunas: owner: users_id, online: boolean, avatar: string.
- [x]  Construir o context e a parte de autenticação no servidor Graphql.
- [x]  Criar uma query chamada profile que irá usar o token passado e retornar todas as informações do usuário.

## Stack

- React com Hooks
- Graphql usando Apollo client.
- WebView para a reprodução de vídeos.

## Configuração 

Crie um arquivo environment.js na raiz do projeto que deverá ter a seguinte estrutura.

```javascript
export const ENV = {
    dev: {
        apiURL: ''
    }
}
```
Após isso de um **npm install** e siga para as configurações do servidor.

A **API Graphql** deste aplicativo se encontra nesse [link](https://github.com/felipehfs/fastpeople-api).