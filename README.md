<h1>Configurar e Criar Projeto</h1>
1) Abrir o **CMD** e navegar até a pasta em que o projeto ficará
2) Criar projeto:

```
npm create vite@latest
```
3) Escolher o **nome**
4) Escolher o **framework**: React
5) Escolher a variante (forma que serão importados scripts): Javascript inicialmente

Rodar projeto:
```
npm i
npm run dev
```

#
<h1>Componentes</h1>
<h4>Funções criadas em arquivos jsx (Arquivos .JS que retornam HTML</h4>

Obs: Ao importarmos um componente, se tentarmos utilizá-lo várias vezes em sequência, o mesmo deve estar dentro de alguma tag:

```
import Post from './assets/Post'
function App() {

  return (
    <div>
      <Post />
      <Post />
      <Post />
      <Post />
     </div>
  )
}

export default App

```
