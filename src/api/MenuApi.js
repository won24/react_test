import menus from '../data/Menu.json';

export const getMenuList = ()=>{
    return menus;
}

export function getMenuDetail(id){
    return menus.filter(menu => menu.id === parseInt(id))[0];
}