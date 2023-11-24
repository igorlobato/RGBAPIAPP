import {Entity, model, property} from '@loopback/repository';

@model()
export class Curtidas extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;


  constructor(data?: Partial<Curtidas>) {
    super(data);
  }
}

export interface CurtidasRelations {
  // describe navigational properties here
}

export type CurtidasWithRelations = Curtidas & CurtidasRelations;
