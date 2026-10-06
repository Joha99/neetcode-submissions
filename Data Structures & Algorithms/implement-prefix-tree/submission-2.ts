interface TrieNode {
    children: Record<string, TrieNode>;
    isEnd: boolean;
}

class PrefixTree {
    #root: TrieNode;

    constructor() {
        this.#root = { children: {}, isEnd: false };
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let currNode = this.#root;
        for (let i = 0; i < word.length; i++) {
            const currChar = word[i];

            if (!currNode.children[currChar]) {
                const newNode: TrieNode = {
                    children: {},
                    isEnd: i === word.length - 1,
                };
                currNode.children[currChar] = newNode;
            } else if (currNode.children[currChar] && i === word.length - 1) {
                currNode.children[currChar].isEnd = true;
            }

            currNode = currNode.children[currChar];
        }
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let currNode = this.#root;

        for (let i = 0; i < word.length; i++) {
            const currChar = word[i];

            if (i === word.length - 1 && currNode.children[currChar]) {
                return currNode.children[currChar].isEnd;
            } else if (currNode.children[currChar]) {
                currNode = currNode.children[currChar];
            } else {
                return false;
            }
        }

        return false;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        let currNode = this.#root;
        for (let i = 0; i < prefix.length; i++) {
            const currChar = prefix[i];
            if (currNode.children[currChar]) {
                currNode = currNode.children[currChar];
            } else {
                return false;
            }
        }
        return true;
    }
}
