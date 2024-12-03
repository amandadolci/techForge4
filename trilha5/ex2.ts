// 2. Inventário de Itens
// Crie uma classe abstrata Inventory que gerencie um inventário de itens.
// Ela deve ter métodos abstratos
//   - addItem(item: string, quantity: number): void,
//   - removeItem(item: string): void,
//   - getInventory(): Record<string, number>.
// Dica: ver tipagem com Record para objetos com TypeScript

// Crie duas subclasses WarehouseInventory e StoreInventory.
// WarehouseInventory deve ter a capacidade de armazenar quantidades grandes e
// controlar os itens de forma genérica.
// StoreInventory deve ter um limite de quantidade por item(máximo 10 unidades)
// e impedir que itens ultrapassem esse limite.
// Ambos os inventários devem retornar uma lista de itens com suas quantidades disponíveis.
abstract class Inventory {
	protected items: Record<string, number>;

	constructor() {
		this.items = {};
	}

	abstract addItem(item: string, quantity: number): void;
	abstract removeItem(item: string): void;
	abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
	addItem(item: string, quantity: number): void {
		this.items[item] = (this.items[item] || 0) + quantity;
	}

	removeItem(item: string): void {
		delete this.items[item];
	}

	getInventory(): Record<string, number> {
		return this.items;
	}
}

class StoreInventory extends Inventory {
	addItem(item: string, quantity: number): void {
		if ((this.items[item] || 0) + quantity > 10) {
			console.log(`Não é possível adicionar mais de 10 unidades de ${item}`);
			return;
		}
		this.items[item] = (this.items[item] || 0) + quantity;
	}

	removeItem(item: string): void {
		delete this.items[item];
	}

	getInventory(): Record<string, number> {
		return this.items;
	}
}

// Testando:
const warehouse = new WarehouseInventory();
warehouse.addItem('Caixa', 50);
warehouse.addItem('Palete', 20);
console.log(warehouse.getInventory());

const store = new StoreInventory();
store.addItem('Notebook', 5);
store.addItem('Notebook', 6);
console.log(store.getInventory());
