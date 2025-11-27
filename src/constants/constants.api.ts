const BASE_REQUEST_CONGIG: RequestInit = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const ERROR_MESSAGES = {
  UPDATE_TODO: 'Не удалось обновить задачу',
  DELETE_TODO: 'Не удалось удалить задачу',
  CREATE_TODO: 'Не удалось создать задачу',
  NETWORK_ERROR: 'Проверьте подключение к интернету',
  SERVER_ERROR: 'Ошибка сервера, попробуйте позже',
  NOT_FOUND: 'Задача не найдена',
};

const SUCCESS_MESSAGES = {
  UPDATE_TODO: 'Задача успешно обновлена!',
  DELETE_TODO: 'Задача успешно удалена!',
  CREATE_TODO: 'Задача успешно добавлена!',
};

export { BASE_REQUEST_CONGIG, ERROR_MESSAGES, SUCCESS_MESSAGES };
