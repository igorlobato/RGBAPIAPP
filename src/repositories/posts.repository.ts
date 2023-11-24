import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Posts, PostsRelations} from '../models';

export class PostsRepository extends DefaultCrudRepository<
  Posts,
  typeof Posts.prototype.id,
  PostsRelations
> {
  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource,
  ) {
    super(Posts, dataSource);
  }
}
