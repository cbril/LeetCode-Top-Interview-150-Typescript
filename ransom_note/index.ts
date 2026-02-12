/**
 * 
 * @param text a string of lower case English letters
 * @returns a map where the key is the character and value is number of times the character appears
 */
function getCharacterMap(text: string): Map<string, number> {
    const characterMap = new Map<string, number>();
    for (const char of text) {
        characterMap.set(char, (characterMap.get(char) || 0) + 1);
    }
    return characterMap;
};

/**
 * 
 * @param ransomNote - a string of lower case English letters
 * @param magazine  - a string of lower case English letters
 * @returns true if "ransomNote" can be constructed with the letters from "magazine" 
 *          (no reusing letters), false otherwise
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
    /** My first idea is to iterate through each letter in "ransomNote" and search for that letter
     * in "magazine", removing it from magazine if it's found. But this time complexity is O(n^2).
     * 
     * I'll try using a map of "magazine" with character as key and character count as value which has
     * time complexity of O(n)
     */
    const characterMap: Map<string, number> = getCharacterMap(magazine);
    for (const char of ransomNote) {
        const count = characterMap.get(char);
        if (count) {
            characterMap.set(char, count - 1);
        } else {
            return false;
        }
    }
    return true;
};

function main(): void {
    var ransomNote = "cookie";
    var magazine = "chocolate chip cookie";
    console.log(`${ransomNote} can be constructed by ${magazine}: ${canConstruct(ransomNote, magazine)}`);

    ransomNote = "baddie";
    magazine = "bad";
    console.log(`${ransomNote} can be constructed by ${magazine}: ${canConstruct(ransomNote, magazine)}`);
};

main();
