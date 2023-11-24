import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Posts,
  Usuarios,
} from '../models';
import {UsuariosRepository} from '../repositories';

export class UsuariosPostsController {
  constructor(
    @repository(UsuariosRepository) protected usuariosRepository: UsuariosRepository,
  ) { }

  @get('/usuarios/{id}/posts', {
    responses: {
      '200': {
        description: 'Usuarios has one Posts',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Posts),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Posts>,
  ): Promise<Posts> {
    return this.usuariosRepository.posts(id).get(filter);
  }

  @post('/usuarios/{id}/posts', {
    responses: {
      '200': {
        description: 'Usuarios model instance',
        content: {'application/json': {schema: getModelSchemaRef(Posts)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Usuarios.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Posts, {
            title: 'NewPostsInUsuarios',
            exclude: ['id'],
            optional: ['postador']
          }),
        },
      },
    }) posts: Omit<Posts, 'id'>,
  ): Promise<Posts> {
    return this.usuariosRepository.posts(id).create(posts);
  }

  @patch('/usuarios/{id}/posts', {
    responses: {
      '200': {
        description: 'Usuarios.Posts PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Posts, {partial: true}),
        },
      },
    })
    posts: Partial<Posts>,
    @param.query.object('where', getWhereSchemaFor(Posts)) where?: Where<Posts>,
  ): Promise<Count> {
    return this.usuariosRepository.posts(id).patch(posts, where);
  }

  @del('/usuarios/{id}/posts', {
    responses: {
      '200': {
        description: 'Usuarios.Posts DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Posts)) where?: Where<Posts>,
  ): Promise<Count> {
    return this.usuariosRepository.posts(id).delete(where);
  }
}
