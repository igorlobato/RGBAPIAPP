import {Entity, model, property, hasOne} from '@loopback/repository';
import {Posts} from './posts.model';

@model()
export class Usuarios extends Entity {
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
  nome: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  senha: string;

  @property({
    type: 'boolean',
    required: true,
  })
  adm: boolean;

  @property({
    type: 'string',
  })
  foto?: string;

  @hasOne(() => Posts, {keyTo: 'postador'})
  posts: Posts;

  constructor(data?: Partial<Usuarios>) {
    super(data);
  }
}

export interface UsuariosRelations {
  // describe navigational properties here
}

export type UsuariosWithRelations = Usuarios & UsuariosRelations;
