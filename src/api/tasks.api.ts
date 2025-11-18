import { createTodoDto } from './tasks.api.types';
import { Todo } from 'types/Todo';
import { BASE_REQUEST_CONGIG } from 'constants/constants.api';

const API_URL = 'https://tasks-service-maks1394.amvera.io';

class BaseRequestAgent {
  constructor(private _api_url: string) {}

  protected fetchRequest = async <RequestDataType>(url: string, config: RequestInit = {}): Promise<RequestDataType> => {
    console.log(`${this._api_url}${url}`);
    console.log({ ...BASE_REQUEST_CONGIG, ...config });
    const response = await fetch(`${this._api_url}${url}`, { ...BASE_REQUEST_CONGIG, ...config });

    console.log(response);

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    throw new Error(String(response.status));
  };
}

class TodoRequestAgent extends BaseRequestAgent {
  constructor() {
    super(API_URL);
  }

  getAllTodos = async (): Promise<Todo[]> => {
    try {
      const todos = await this.fetchRequest<Todo[]>('/tasks');
      return todos;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}

export { TodoRequestAgent };
