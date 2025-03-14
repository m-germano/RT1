import Descritor from "./Descritor";
import Empresa from "./Empresa";
import Endereco from "./Endereco";
import Funcionario from "./Funcionario";
import Telefone from "./Telefone";
//OBS: Arquivo formatado com Eslint e Prettier
const endereco = new Endereco(123, "Av. Paulista", "Jardim Paulista", "São Paulo");
const telefone = new Telefone("11", "999999999");
const funcionario1 = new Funcionario("Tony Stark", "12345678", "12345678910", endereco, telefone);
const funcionario2 = new Funcionario("Steve Rogers", "87654321", "10987654321", endereco, telefone);
let funcionarios = [];
funcionarios.push(funcionario1, funcionario2);
const empresa = new Empresa("ABC LTDA", "Mercado Online", "999-999-999-999-99", endereco, funcionarios);
const descritor = new Descritor(empresa);
descritor.descrever();
