import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Comentarios, ComentariosRelations} from '../models';

export class ComentariosRepository extends DefaultCrudRepository<
  Comentarios,
  typeof Comentarios.prototype.id,
  ComentariosRelations
> {
  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource,
  ) {
    super(Comentarios, dataSource);
  }
}
