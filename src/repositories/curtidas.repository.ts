import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Curtidas, CurtidasRelations} from '../models';

export class CurtidasRepository extends DefaultCrudRepository<
  Curtidas,
  typeof Curtidas.prototype.id,
  CurtidasRelations
> {
  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource,
  ) {
    super(Curtidas, dataSource);
  }
}
