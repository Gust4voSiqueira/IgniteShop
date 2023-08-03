
# Ignite Shop 🛍️

Projeto desenvolvido durante o programa de aceleração de carreira **Ignite** da **Rocketseat**.

## Tecnologias Utilizadas
Este projeto foi construído com as seguintes tecnologias:
- **Next.js:** Framework React com foco em renderização no lado do servidor.
- **Stripe:** Plataforma de pagamento online para empresas.
- **Axios:** Biblioteca HTTP para fazer requisições.
- **TypeScript:** Superset JavaScript que traz tipagem estática.
- **Radix UI:** Conjunto de componentes para construção de interfaces.
- **Keen Slider:** Biblioteca para criação de carrosséis interativos.

## Rodando o Projeto
Para executar o projeto localmente, siga os passos abaixo:

**Instale o Node:** Certifique-se de que o Node.js está instalado em sua máquina.

**Conta no Stripe:** Você precisa possuir uma conta no Stripe para a integração de pagamento.

Após cumprir os requisitos acima, siga os passos:

### 1. Clonar o repositório
Abra o terminal e execute o seguinte comando para clonar o projeto:
```bash
  git clone https://github.com/Gust4voSiqueira/Ignite-Shop.git
```

### 2. Instalar Dependências
Navegue para o diretório do projeto:
```bash
  cd Ignite-Shop
```

Instale as dependências utilizando o npm:
```bash
  npm install
```
### 3. Configurar Chaves Secretas do Stripe
Serão necessárias chaves secretas do Stripe para a integração. Siga esses passos:

1. Acesse a sua conta Stripe e vá para a aba Desenvolvedores > Chaves da API.
2. Crie um arquivo chamado .env.local na raiz do projeto.
3. Adicione as chaves da seguinte forma:

```bash
    NEXT_KEY_STRIPE_PUBLIC=sua_chave_publica
    NEXT_KEY_STRIPE_SECRET=sua_chave_secreta
```

### 4. Cadastrar Produtos no Stripe
Acesse a aba **Produtos** no painel do Stripe e cadastre os produtos necessários.

### 5. Executar a Aplicação
Finalmente, execute a aplicação com o seguinte comando:
```bash
    npm run dev
```
