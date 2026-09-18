interface TrieNode {
    children?: Record<string, TrieNode>;
    isEnd?: boolean;
}

const buildTrie = (arr: string[]): TrieNode => {
    if (arr.length === 0) {
        return undefined;
    }

    if (arr.length === 1) {
        return {
            children: {
                [arr[0]]: {},
            },
            isEnd: true,
        };
    }

    return {
        children: {
            [arr[0]]: buildTrie(arr.slice(1)),
        },
        isEnd: false,
    };
};

class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        const trie = buildTrie([...strs[0]]);
        let maxPrefix = strs[0];

        for (let i = 1; i < strs.length; i++) {
            const currentStr = strs[i];
            let currMaxPrefix = "";
            let currTrie = trie?.children;

            for (let j = 0; j < currentStr.length; j++) {
                if (currTrie && currTrie[currentStr[j]]) {
                    currMaxPrefix += currentStr[j];
                    currTrie = currTrie[currentStr[j]]?.children;
                } else {
                    break;
                }
            }

            if (currMaxPrefix === "") {
                return "";
            } else if (currMaxPrefix.length < maxPrefix.length) {
                maxPrefix = currMaxPrefix;
            }
        }
        return maxPrefix;
    }
}
