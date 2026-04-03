import { BaseMenuItem, findItemById } from "./menu-item-types";
import { Client, MenuItemType } from "./models";

export class MenuManager {
    private _items: BaseMenuItem[] = [];
    private _clients: Map<number, Client[]> = new Map();

    addMenuItem(item: BaseMenuItem): string {
        this._items.push(item);
        this._clients.set(item.id, []);

        return `Menu item "${item.name}" (ID: ${item.id}) has been added.`
    }

    registerClient(itemId: number, client: Client): string {
        const itemClientList = this._clients.get(itemId);

        if(!itemClientList) {
            return `ERROR: Menu item with ID ${itemId} not found.`
        }

        itemClientList.push(client)
        return `Client ${client.name} registered for menu item ID ${itemId} successfully.`
    }

    listAllItems (): string[] {
        let result = ["--- List of All Menu Items ---"];

        for (let item of this._items) {
            result.push(`[${MenuItemType[item.type].toUpperCase()}] ${item.name} (${item.weightGrams}g) - Calories: ${item.getCalories().toFixed(2)}`);
        }

        return result;
    }

    findMenuItem(itemId: number): BaseMenuItem | undefined {
        return findItemById(this._items, itemId); 
    }
}
