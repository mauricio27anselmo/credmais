var configuracoes = (function(){
    configurarTabela = function(){
        $(document).ready(function(){
            $("#vendas").DataTable({
                paging : false,
                searching : false,
                language : {
                    emptyTable : "Não há registros de vendas",
                    infoEmpty: ""
                }
            });
        })
    }

    return {
        configurarTabela : configurarTabela
    }
})();