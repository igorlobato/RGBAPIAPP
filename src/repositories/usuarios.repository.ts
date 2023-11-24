import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Usuarios, UsuariosRelations, Posts} from '../models';
import {PostsRepository} from './posts.repository';

export class UsuariosRepository extends DefaultCrudRepository<
  Usuarios,
  typeof Usuarios.prototype.id,
  UsuariosRelations
> {

  public readonly posts: HasOneRepositoryFactory<Posts, typeof Usuarios.prototype.id>;

  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource, @repository.getter('PostsRepository') protected postsRepositoryGetter: Getter<PostsRepository>,
  ) {
    super(Usuarios, dataSource);
    this.posts = this.createHasOneRepositoryFactoryFor('posts', postsRepositoryGetter);
    this.registerInclusionResolver('posts', this.posts.inclusionResolver);
  }
}
