import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Curtidas} from '../models';
import {CurtidasRepository} from '../repositories';

export class CurtidasController {
  constructor(
    @repository(CurtidasRepository)
    public curtidasRepository : CurtidasRepository,
  ) {}

  @post('/curtidas')
  @response(200, {
    description: 'Curtidas model instance',
    content: {'application/json': {schema: getModelSchemaRef(Curtidas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Curtidas, {
            title: 'NewCurtidas',
            exclude: ['id'],
          }),
        },
      },
    })
    curtidas: Omit<Curtidas, 'id'>,
  ): Promise<Curtidas> {
    return this.curtidasRepository.create(curtidas);
  }

  @get('/curtidas/count')
  @response(200, {
    description: 'Curtidas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Curtidas) where?: Where<Curtidas>,
  ): Promise<Count> {
    return this.curtidasRepository.count(where);
  }

  @get('/curtidas')
  @response(200, {
    description: 'Array of Curtidas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Curtidas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Curtidas) filter?: Filter<Curtidas>,
  ): Promise<Curtidas[]> {
    return this.curtidasRepository.find(filter);
  }

  @patch('/curtidas')
  @response(200, {
    description: 'Curtidas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Curtidas, {partial: true}),
        },
      },
    })
    curtidas: Curtidas,
    @param.where(Curtidas) where?: Where<Curtidas>,
  ): Promise<Count> {
    return this.curtidasRepository.updateAll(curtidas, where);
  }

  @get('/curtidas/{id}')
  @response(200, {
    description: 'Curtidas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Curtidas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Curtidas, {exclude: 'where'}) filter?: FilterExcludingWhere<Curtidas>
  ): Promise<Curtidas> {
    return this.curtidasRepository.findById(id, filter);
  }

  @patch('/curtidas/{id}')
  @response(204, {
    description: 'Curtidas PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Curtidas, {partial: true}),
        },
      },
    })
    curtidas: Curtidas,
  ): Promise<void> {
    await this.curtidasRepository.updateById(id, curtidas);
  }

  @put('/curtidas/{id}')
  @response(204, {
    description: 'Curtidas PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() curtidas: Curtidas,
  ): Promise<void> {
    await this.curtidasRepository.replaceById(id, curtidas);
  }

  @del('/curtidas/{id}')
  @response(204, {
    description: 'Curtidas DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.curtidasRepository.deleteById(id);
  }
}
