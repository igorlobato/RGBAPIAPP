import {Entity, model, property} from '@loopback/repository';

@model()
export class Curtidas extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  id_post: number;


  constructor(data?: Partial<Curtidas>) {
    super(data);
  }
}

export interface CurtidasRelations {
  // describe navigational properties here
}

export type CurtidasWithRelations = Curtidas & CurtidasRelations;
