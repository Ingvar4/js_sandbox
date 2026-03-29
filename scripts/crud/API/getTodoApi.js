import { host } from "../maincrud.js";

//переделываем функию getData в getTodos
export async function getTodos() {
  try {
    const responce = await fetch(host);

    if(!responce.ok) {
      throw new Error (`Данные не получены. Статус: ${responce.status}`)
    }
    
    const data = await responce.json();

    if (data.length === 0) {
      throw new Error ('Задач нет');
    }
    
    data.sort((a, b) => a.order - b.order);
    console.log('Данный получены', data);
    return data;
  } catch (error) {
    console.error(`Ошибка получения данных:`, error.message);
    throw error;
  }
}