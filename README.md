# ASPNET-Core-MPA-SPA-React

Projeto ASP.NET Core 3.1 que implementa uma MPA (Multi Page Application) com SPA (Single Page Application) React em algumas Views usando Webpack.

# Como executar

## Execute o projeto ASP.NET pelo VS ou via terminal.
cmd: ...\MPA-SPA>dotnet run

## Execute o projeto React via terminal.
cmd: ...\MPA-SPA\wwwroot\clientapp npm install

cmd: ...\MPA-SPA\wwwroot\clientapp npm start

O Webpack foi configurado para transpilar os arquivos JS da pasta wwwroot\clientapp\src\views para wwwroot\dist. Os nomes dos arquivos .js são mantidos ao final do processo. Portanto, as Views que necessitarem de código React devem importar os arquivos transpilados:

```razor
@{
    ViewData["Title"] = "React 1";
}

@section Scripts {

    #<script src="~/clientapp/dist/views/react1/Index.js"></script>
    
    }
<div id="root"></div>
```
