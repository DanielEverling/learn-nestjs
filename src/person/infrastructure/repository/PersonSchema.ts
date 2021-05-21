
import { EntitySchema } from 'typeorm';
import { Person } from 'src/person/application/domain/Person';

export const PersonSchema = new EntitySchema<Person>({
  name: 'person',
  columns: {
    id: {
      type: String,
      primary: true,
      generated: 'uuid'
    },
    name: {
      type: String,
    },
    document: {
      type: String,
    }
  }
});