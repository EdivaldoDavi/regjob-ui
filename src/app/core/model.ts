import { VagaService } from "../services/vaga.service";

export class Candidato {
  id? :number;
  nome : string | undefined;
  perfil : string | undefined;
  salario: number | undefined;
  anexo : string |undefined;

}


export class Vaga {
  id?: number;
  descricao?: string;

}
export class CandidatoVaga {

  candidato = new Candidato();
  vaga = new Vaga();

}
