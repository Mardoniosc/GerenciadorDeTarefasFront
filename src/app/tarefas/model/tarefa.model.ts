export interface Tarefa {
  id: number,
  titulo: string,
  status: number,
  descricao: string,
  dataCriacao: Date,
  dataAtualizacao: Date,
  remocao: Date,
  conclusao: Date,
  statusRemocao: number
}
