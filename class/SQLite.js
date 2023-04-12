import * as SQLite from 'expo-sqlite';

class Database {

    constructor(dataBaseName = "mydb") {
        this.db = null;
        this.dataBaseName = dataBaseName;
    }

    async open() {
        try {
            this.db = await SQLite.openDatabase({
                name: this.dataBaseName + '.db',
                location: 'default',
            });
        } catch (error) {
            console.error(error);
        }
    }

    async close() {
        try {
            if (this.db) {
                await this.db.close();
                this.db = null;
            }
        } catch (error) {
            console.error(error);
        }
    }

    async execute(sql, params = []) {
        try {
            const result = await this.db.executeSql(sql, params);
            let tab = [];
            result.forEach(element => {
                tab.push(element.rowsAffected);
            });
        } catch (error) {
            console.error(error);
        }
    }
}

export default new Database();