export const initialStore = () => {
  return {
    message: null,
    agendas: null,
    contacts: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case 'saveAgendasWithContacts':
      return {
        ...store,
        agendas: action.payload.agendasWithContacts
      };

    case 'saveContacts':

      return {
        ...store,
        contacts: action.payload.data.contacts
      }

    case 'saveAgendas':
      return {
        ...store,
        agendas: action.payload.agendas
      }



    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }
}
