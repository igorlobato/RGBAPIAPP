import {Entity, model, property} from '@loopback/repository';

@model()
export class Posts extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  titulo: string;

  @property({
    type: 'string',
    required: true,
  })
  descricao: string;

  @property({
    type: 'string',
  })
  imagem?: string;

  @property({
    type: 'string',
    required: true,
  })
  data: string;

  @property({
    type: 'string',
    required: true,
  })
  hora: string;

  @property({
    type: 'string',
    required: true,
  })
  topico: string;

  @property({
    type: 'number',
  })
  postador?: number;

  constructor(data?: Partial<Posts>) {
    super(data);
  }
}

export interface PostsRelations {
  // describe navigational properties here
}

export type PostsWithRelations = Posts & PostsRelations;
