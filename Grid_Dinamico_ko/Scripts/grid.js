///<reference path= "/scripts/knockout-3.3.0.debug.js" />
///<reference path= "/scripts/jquery-2.1.4.js" />

$(document).ready(function() {
    var PresenteModel = function(presentes) {
        var self = this;

        self.presentes = ko.observableArray(presentes);


        //função para adicionar presentes (push):
        self.adicionarPresente = function() {
            self.presentes.push({
                nome: "",
                preco: ""
            });
        };

        //função para remover presentes (remove):
        self.removerPresente = function(presente) {
            self.presentes.remove(presente);
        };

        //função para salvar
        self.salvar = function(form) {
            alert("Transmitindo informações para a base de dados: " + ko.utils.stringifyJson(self.presentes));
        };
    };

    var viewModel = new PresenteModel([
        { nome: "Teclado Microsoft Hub", preco: "R$ 99.90" },
        { nome: "Notebook Acer 17'", preco: "R$ 1590.00" }
    ]);

    ko.applyBindings(viewModel);

    //Ativar a validação do JQuery:
    $("form").validate({ submitHandler: viewModel.salvar });

});